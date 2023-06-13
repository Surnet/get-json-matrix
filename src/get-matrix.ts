import {readFileSync} from 'fs'

export async function getMatrix(
  filePath: string
): Promise<{include: {key: string; value: unknown}[]}> {
  const object = JSON.parse(readFileSync(filePath).toString())
  const matrix = {
    include: [] as {key: string; value: unknown}[]
  }
  for (const [key, value] of Object.entries(object)) {
    matrix.include.push({
      key,
      value
    })
  }
  return matrix
}
