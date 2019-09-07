import styled from "styled-components"
import Primitives from "lib/primitives"

export const Example = styled(Primitives.Box)`
  &:before {
    content: "''";
  }
  &:after {
    content: "''";
  }
  color: #aaaaaa;
  font-size: 13px;
  font-weight: 300;
`

export const Synonyms = styled(Primitives.Box)`
  margin-right: 3px;
  color: #aaaaaa;
  font-style: italic;
`
