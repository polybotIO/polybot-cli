// Native
import {homedir} from 'os'
import path from 'path'

// Packages
import fs from 'fs-promise'

let file = process.env.POLYBOT_JSON ? path.resolve(process.env.POLYBOT_JSON) : path.resolve(homedir(), '.polybot.json')

export function setConfigFile(jsonfile) {
  file = path.resolve(jsonfile)
}

export function read() {
  let existing = null

  try {
    existing = fs.readFileSync(file, 'utf8')
    existing = JSON.parse(existing)
  } catch (err) {}

  return existing || {}
}

/**
 * Merges the `data` object onto the
 * JSON config stored in `.polybot.json`.
 *
 * (atomic)
 * @param {Object} data
 */
export function merge(data) {
  const cfg = Object.assign({}, read(), data)
  fs.writeFileSync(file, JSON.stringify(cfg, null, 2))
}
