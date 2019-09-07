import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { HashRouter } from "react-router-dom"
import "./index.css"
import GlobalStyle from "styles/GlobalStyle"
import { ThemeProvider } from "styled-components"
import Theme from "styles"

ReactDOM.render(
    <HashRouter>
      <ThemeProvider theme={Theme}>
        <React.Fragment>
          <App />
          <GlobalStyle />
        </React.Fragment>
      </ThemeProvider>
    </HashRouter>,
  document.getElementById("root")
)
