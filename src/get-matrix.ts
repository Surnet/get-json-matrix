import {readFile} from 'fs/promises'

export async function getMatrix(
  filePath: string
): Promise<{include: {key: string; value: unknown}[]}> {
  const fileContent = await readFile(filePath)
  const object = JSON.parse(fileContent.toString())
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
