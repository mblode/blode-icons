'use client'

import type { ReactNode } from 'react'
import { createElement, forwardRef, useEffect, useState } from 'react'
import type { LucideIcon, LucideProps } from './lucide-types'
import dynamicIconImports from './dynamicIconImports'

export type IconName = keyof typeof dynamicIconImports

interface DynamicIconProps extends LucideProps {
  name: IconName
  fallback?: ReactNode
}

const DynamicIcon = forwardRef<SVGSVGElement, DynamicIconProps>(
  ({ name, fallback = null, ...props }, ref) => {
    const [LoadedIcon, setLoadedIcon] = useState<LucideIcon | null>(null)

    useEffect(() => {
      if (!(name in dynamicIconImports)) {
        console.error(
          `[blode-icons-react]: Icon "${String(name)}" not found`,
        )
        return
      }
      dynamicIconImports[name as keyof typeof dynamicIconImports]()
        .then((mod) => setLoadedIcon(() => mod.default))
        .catch(console.error)
    }, [name])

    if (!LoadedIcon) {
      return fallback
    }

    return createElement(LoadedIcon, { ref, ...props })
  },
)

DynamicIcon.displayName = 'DynamicIcon'
export { DynamicIcon }
export default DynamicIcon
