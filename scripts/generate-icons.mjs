import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import { transform } from '@svgr/core'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const svgDir = path.join(__dirname, '../icons-svg')
const dataDir = path.join(__dirname, '../icons-data')
const srcDir = path.join(__dirname, '../src')
const manifestPath = path.join(__dirname, '../.cache-manifest.json')

const docsTsxDir = path.join(__dirname, '../docs/src/icons-tsx')
const docsSvgDir = path.join(__dirname, '../docs/src/icons-svg')
const docsDataDir = path.join(__dirname, '../docs/src/icons-data')

// CLI flags
const args = process.argv.slice(2)
const force = args.includes('--force')
const noDocs = args.includes('--no-docs')
const filterArg = args.find((a) => a.startsWith('--filter='))
const filterPattern = filterArg ? filterArg.split('=')[1] : null

// Load SVGO config
const svgoConfig = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../svgo.json'), 'utf8'),
)

// SVGR options — hash includes config so cache busts on config changes
const svgrConfig = {
  typescript: true,
  ref: true,
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
  svgoConfig,
}
const configHash = crypto
  .createHash('md5')
  .update(JSON.stringify(svgrConfig))
  .digest('hex')

function toComponentName(str) {
  return (
    str
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('') + 'Icon'
  )
}

function matchesFilter(name) {
  if (!filterPattern) return true
  if (filterPattern.includes('*')) {
    const escaped = filterPattern.replace(/[-/\\^$+?.()|[\]{}]/g, '\\$&')
    const regex = new RegExp('^' + escaped.replace(/\\\*/g, '.*') + '$')
    return regex.test(name)
  }
  return name.includes(filterPattern)
}

async function main() {
  const startTime = performance.now()

  fs.mkdirSync(srcDir, { recursive: true })

  const svgFiles = fs
    .readdirSync(svgDir)
    .filter((file) => file.endsWith('.svg'))

  const savedManifest = loadManifest()
  const oldManifest = force ? {} : savedManifest
  // When filtering, preserve manifest entries for non-filtered icons
  const newManifest = filterPattern ? { ...savedManifest } : {}
  const errors = []
  let changedCount = 0
  let cachedCount = 0

  const filesToProcess = filterPattern
    ? svgFiles.filter((f) => matchesFilter(path.basename(f, '.svg')))
    : svgFiles

  console.log(
    `Processing SVG files... (${filesToProcess.length} total${force ? ', forced rebuild' : ''})`,
  )

  for (const file of filesToProcess) {
    const iconName = path.basename(file, '.svg')
    const componentName = toComponentName(iconName)
    const svgFilePath = path.join(svgDir, file)
    const componentFilePath = path.join(srcDir, `${iconName}.tsx`)

    try {
      const svgCode = fs.readFileSync(svgFilePath, 'utf8')
      const hash = crypto
        .createHash('md5')
        .update(svgCode + configHash)
        .digest('hex')
      newManifest[iconName] = hash

      if (
        !force &&
        oldManifest[iconName] === hash &&
        fs.existsSync(componentFilePath)
      ) {
        cachedCount++
      } else {
        const componentCode = await transform(svgCode, svgrConfig, {
          componentName,
        })
        fs.writeFileSync(componentFilePath, componentCode + '\n')
        changedCount++
      }
    } catch (err) {
      errors.push({ file, error: err.message })
      console.error(`  Failed: ${file} - ${err.message}`)
    }
  }

  // Remove stale components — always use full svgFiles list, not filtered subset
  const allIconNames = new Set(svgFiles.map((f) => path.basename(f, '.svg')))
  const existingComponents = fs
    .readdirSync(srcDir)
    .filter((f) => f.endsWith('.tsx') && f !== 'all-icons.ts')

  for (const file of existingComponents) {
    const iconName = path.basename(file, '.tsx')
    if (!allIconNames.has(iconName)) {
      fs.unlinkSync(path.join(srcDir, file))
      delete newManifest[iconName]
    }
  }

  // Build sorted exports from all SVG files (not just filtered)
  const exports = svgFiles
    .map((f) => path.basename(f, '.svg'))
    .map(
      (name) =>
        `export { default as ${toComponentName(name)} } from './${name}';`,
    )
    .sort()

  fs.writeFileSync(path.join(srcDir, 'all-icons.ts'), exports.join('\n') + '\n')

  // Save cache manifest
  fs.writeFileSync(manifestPath, JSON.stringify(newManifest, null, 2) + '\n')

  // Copy to docs directories
  if (!noDocs) {
    fs.rmSync(docsTsxDir, { recursive: true, force: true })
    fs.cpSync(srcDir, docsTsxDir, { recursive: true })

    fs.rmSync(docsSvgDir, { recursive: true, force: true })
    fs.cpSync(svgDir, docsSvgDir, { recursive: true })

    fs.rmSync(docsDataDir, { recursive: true, force: true })
    fs.cpSync(dataDir, docsDataDir, { recursive: true })
  }

  const elapsed = ((performance.now() - startTime) / 1000).toFixed(1)

  console.log(
    `Done in ${elapsed}s — ${changedCount} changed, ${cachedCount} cached, ${exports.length} total${noDocs ? ' (skipped docs)' : ''}`,
  )

  if (errors.length) {
    console.error(`\nFailed: ${errors.length} icon(s)`)
    errors.forEach(({ file, error }) => console.error(`  ${file}: ${error}`))
    process.exit(1)
  }
}

function loadManifest() {
  try {
    return JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  } catch {
    return {}
  }
}

main()
