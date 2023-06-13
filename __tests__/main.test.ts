import {getMatrix} from '../src/get-matrix'
import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import {expect, test} from '@jest/globals'

test('throws file not found', async () => {
  await expect(getMatrix('./not-found.json')).rejects.toThrow('ENOENT: no such file or directory, open \'./not-found.json\'')
})

test('returns expected result', async () => {
  const matrix = await getMatrix('./__tests__/sample.json');
  await expect(matrix).toEqual({
    include: [
      { key: 'key1', value: 'value1' },
      { key: 'key2', value: 'value2' },
      { key: 'key3', value: 'value3' }
    ]
  })
})
