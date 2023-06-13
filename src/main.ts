import * as core from '@actions/core'
import {getMatrix} from './get-matrix'

async function run(): Promise<void> {
  try {
    core.setOutput('matrix', getMatrix(core.getInput('filepath')))
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
