// Native
import os from 'os'

// Ours
import {version} from '../../package'

export default `polybot ${version} node-${process.version} ${os.platform()} (${os.arch()})`
