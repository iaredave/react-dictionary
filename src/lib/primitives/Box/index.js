import styled from "styled-components"
import {
  background,
  border,
  color,
  layout,
  position,
  space,
  shadow
} from "styled-system"

const Box = styled.div`
  box-sizing: border-box;
  ${background};
  ${border};
  ${color};
  ${layout};
  ${position};
  ${shadow};
  ${space};
`

export default Box
