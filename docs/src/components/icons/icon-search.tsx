import React, { useCallback, useMemo, useState } from 'react'
import Fuse from 'fuse.js'
import { icons } from './icons'
import { toast } from 'sonner'

import { kebabCase, sentenceCase } from 'change-case'
import { Input } from '../ui/input'

import { Button } from '../ui/button'
import { LogoIcon } from '../ui/logo-icon'
import {
  LogoWordmarkIcon,
  MagnifyingGlassIcon,
  ClipboardIcon,
} from '@/icons-tsx'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'

export type IconStyle = 'OUTLINE' | 'SOLID'
export type CopyKind = 'SVG' | 'NAME' | 'TSX'

export const IconSearch = () => {
  const [iconStyle, setIconStyle] = useState<IconStyle>('OUTLINE')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState(icons)

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)

    if (query.trim() === '') {
      // If the search query is empty, show all icons
      setSearchResults(icons)
    } else {
      // Perform search using Fuse.js
      const fuse = new Fuse(icons, {
        keys: [
          { name: 'name', weight: 0.6 },
          { name: 'tags', weight: 0.3 },
          { name: 'categories', weight: 0.1 },
        ],
        threshold: 0.3,
        ignoreLocation: true,
        useExtendedSearch: true,
        sortFn: (a, b) => a.score - b.score,
        getFn: (obj, path) => {
          // Handle arrays better (for tags)
          const value = Fuse.config.getFn(obj, path)
          if (Array.isArray(value)) {
            return value.join(' ')
          }
          return value
        },
      })
      const results = fuse.search(query)
      setSearchResults(results.map((result) => result.item))
    }
  }, [])

  const handleIconClick = useCallback(
    async (icon: (typeof icons)[number], copyKind: CopyKind) => {
      let value = ''
      let label = ''

      const fileName = kebabCase(icon.name.replace('Icon', ''), {
        separateNumbers: true,
      })

      try {
        if (copyKind === 'SVG') {
          const svgFile = await import(`../../icons-svg/${fileName}.svg?raw`)
          value = svgFile.default
          label = 'SVG'
        } else if (copyKind === 'TSX') {
          const tsxFile = await import(`../../icons-tsx/${fileName}.tsx?raw`)
          value = tsxFile.default
          label = 'TSX'
        } else if (copyKind === 'NAME') {
          value = icon.name
          label = 'name'
        }

        navigator.clipboard.writeText(value)
        // Optionally, show a toast or notification indicating the icon name has been copied
        toast(
          `"${sentenceCase(icon.name.replace('Icon', ''))}" ${label} copied to clipboard`,
        )
      } catch (error) {
        console.error('Error loading file:', error)
        toast.error(`Failed to copy ${icon.name}`)
      }
    },
    [],
  )

  const filteredIcons = useMemo(
    () =>
      searchResults.filter((icon) => {
        if (iconStyle === 'OUTLINE') {
          return !icon.name.includes('Filled')
        } else {
          return icon.name.includes('Filled')
        }
      }),
    [iconStyle, searchResults],
  )

  return (
    <>
      <header className="container mb-2">
        <a
          className="flex space-x-1 xs:space-x-[5px]"
          href="https://fingertip.com"
        >
          <LogoIcon className=" h-[19.2px] w-[23.376px] shrink-0 xs:h-[24px] xs:w-[29.22px]" />
          <LogoWordmarkIcon className="relative top-[4px] h-[16px] w-[97.566px] shrink-0 xs:h-[20px] xs:w-[121.957px]" />
        </a>
      </header>

      <div className="py-4 bg-background sticky top-0 z-10 border-b border-border shadow-md mb-4">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search all icons..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10"
              />
              <MagnifyingGlassIcon className="size-5 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            <Tabs
              value={iconStyle}
              className="w-full sm:w-auto"
              onValueChange={(value) => setIconStyle(value as IconStyle)}
            >
              <TabsList className="w-full sm:w-auto">
                <TabsTrigger value="OUTLINE" className="w-full sm:w-auto">
                  {' '}
                  <div className="border-foreground border rounded-full size-2 mr-2" />
                  Outline
                </TabsTrigger>
                <TabsTrigger value="SOLID" className="w-full sm:w-auto">
                  {' '}
                  <div className="border-foreground border bg-foreground rounded-full size-2 mr-2" />
                  Solid
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="container pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 gap-y-4">
          {filteredIcons.map((icon) => (
            <div key={icon.name} className="">
              <div className="relative px-2 h-[104px] rounded-xl border border-border group flex flex-col items-center justify-center overflow-hidden">
                {React.createElement(icon.component)}

                <div className="opacity-0 group-hover:opacity-100 absolute inset-0 p-2 flex flex-col gap-2 size-full">
                  <Button
                    onClick={() => handleIconClick(icon, 'SVG')}
                    variant="secondary"
                    className="w-full h-full"
                  >
                    Copy SVG
                  </Button>

                  <Button
                    onClick={() => handleIconClick(icon, 'NAME')}
                    variant="secondary"
                    className="w-full h-full"
                  >
                    Copy name
                  </Button>
                </div>
              </div>

              <span className="mt-2 text-xs text-center text-muted-foreground line-clamp-2">
                {icon.name.replace('Icon', '')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
