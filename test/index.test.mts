import * as assert from 'node:assert'
import * as path from 'node:path'
import { dirname, filename } from '../src/index.mjs'

process.stdout.write('dirname()')
assert.strictEqual(
  path.relative(process.cwd(), dirname(import.meta)),
  'dist/test'
)
console.info('✅')

process.stdout.write('filename()')
assert.strictEqual(
  path.relative(process.cwd(), filename(import.meta)),
  'dist/test/index.test.mjs'
)
console.info('✅')
