[![Build Status](https://github.com/Surnet/get-json-matrix/actions/workflows/test.yml/badge.svg)](https://github.com/Surnet/get-json-matrix)

# Surnet/get-json-matrix

This action gets a GitHub Action Matrix from a JSON.

## Inputs

### `filepath`

The path to the JSON file (defaults to: ./matrix.json)

## Example usage

This runs for the file ./matrix.json in our repository and outputs the 

```yaml
name: Run for every X in JSON

on:
  push:

jobs:
  get-matrix:
    name: Get Matrix from JSON
    runs-on: ubuntu-latest
    permissions:
      contents: read
    outputs:
      matrix: ${{ steps.matrix.outputs.matrix }}
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Get Matrix
        id: matrix
        uses: Surnet/get-json-matrix@v1
        with:
          filepath: ./matrix.json

  run-for-everything:
    name: Run for each Key Value combination in the JSON
    needs: get-matrix
    permissions: {}
    runs-on: ubuntu-latest
    strategy:
      matrix: ${{ fromJson(needs.get-matrix.outputs.matrix) }}
    steps:
      - name: Echo matrix
        run: |
          echo "${{ matrix.key }}"
          echo "${{ matrix.value }}"
```
