import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default {
  input: ['src/index.ts'],
  output: {
    name: 'icons',
    format: 'esm',
    dir: 'dist',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  external: ['react', 'react/jsx-runtime'],
  plugins: [resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' })],
}
