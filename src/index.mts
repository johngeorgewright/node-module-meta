import { fileURLToPath } from 'node:url'
import { dirname as pathDirname } from 'node:path'

export function dirname(meta: ImportMeta) {
  return pathDirname(filename(meta))
}

export function filename(meta: ImportMeta) {
  return fileURLToPath(meta.url)
}
