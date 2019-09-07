import { createGlobalStyle, css } from "styled-components"
import { NoSelect } from "styles/Helpers"

const defaultFont = css`
  font-family: "Rubik", sans-serif;
  font-weight: 300;
`

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0 !important;
    margin: 0 !important;
    ${defaultFont};
  }
  input {
  padding: 0;
    ${defaultFont};
    ::placeholder {
      ${NoSelect};
    }
  }
  button, div, span, td {
    ${defaultFont}
  }
`

export default GlobalStyles
