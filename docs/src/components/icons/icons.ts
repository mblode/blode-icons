import * as IconComponents from '@/icons-tsx'
import { kebabCase } from 'change-case'

const iconMetadataFiles = import.meta.glob('../../icons-data/*.json', {
  eager: true,
})

const metadataMap: any = {}
Object.values(iconMetadataFiles).forEach((module: any) => {
  const data = module.default || module
  if (data.icon) {
    metadataMap[data.icon] = {
      category: data.category || '',
      tags: data.tags || [],
    }
  }
})

export const icons = Object.entries(IconComponents).map(([name, component]) => {
  const iconKey = kebabCase(name.replace(/FilledIcon$|Icon$/, ''), {
    separateNumbers: true,
  })
  const metadata = metadataMap[iconKey] || { category: '', tags: [] }

  return {
    name,
    component,
    category: metadata.category,
    tags: metadata.tags,
    categories: metadata.category ? [metadata.category] : [],
  }
})
