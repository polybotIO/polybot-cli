// Native
import {homedir} from 'os'
import {resolve} from 'path'

// Packages
import fs from 'fs-promise'

let file = process.env.POLYBOT_JSON ? resolve(process.env.POLYBOT_JSON) : resolve(homedir(), '.polybot.json')

function setConfigFile(jsonfile) {
  file = resolve(jsonfile)
}

function read() {
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
function merge(data) {
  const cfg = Object.assign({}, read(), data)
  fs.writeFileSync(file, JSON.stringify(cfg, null, 2))
}

export default {setConfigFile, read, merge}
