import Colors from "./Colors"

const breakpoints = ["550px", "950px", "1200px", "1440px", "1800px"]
const fontSizes = ["14px", "16px", "20px", "25px", "31.25px", "39.06px"]
const lineHeights = [
  "18.2px",
  "20.8px",
  "26px",
  "32.5104px",
  "40.6224px",
  "50.7728px"
]
const shadows = [
  "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.05)",
  "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.20)",
  "0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.20)"
]
const space = [0, 8, 16, 24, 32, 40, 48, 64]

const Theme = {
  breakpoints,
  colors: {
    ...Colors,
    primary: Colors.blue4,
    success: Colors.green6,
    warning: Colors.orange5,
    error: Colors.red7
  },
  fontFamily: "'Open Sans', sans-serif",
  fontSizes,
  lineHeights,
  shadows,
  space
}

export default Theme
