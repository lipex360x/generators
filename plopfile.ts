/* eslint-disable func-names */
import type { NodePlopAPI } from 'plop'

import components from './modules/components'

export default function (plop: NodePlopAPI) {
  plop.setGenerator('components', components)
}
