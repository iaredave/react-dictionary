import { css } from "styled-components"
import { defaultTo } from "ramda"

export const NoSelect = css`
  user-select: none;
  text-decoration: none;
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -ms-user-select: none; /* IE10+ */
`

export const defaultToNone = defaultTo("none")
