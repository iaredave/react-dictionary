import styled from "styled-components"
import { flexbox } from "styled-system"
import Box from "lib/primitives/Box"

const Flex = styled(Box)`
  ${flexbox};
  display: flex;
`

Flex.displayName = "Flex"

export default Flex
