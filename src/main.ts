import * as core from '@actions/core'
import {getMatrix} from './get-matrix'

async function run(): Promise<void> {
  try {
    const matrix = await getMatrix(core.getInput('filepath'))
    core.setOutput('matrix', matrix)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
