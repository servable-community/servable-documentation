import React from 'react'
import App from "@site/src/components/app"
import { ThemeProvider, createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "",
      light: "",
      dark: "",
    },
    secondary: {
      main: "",
      light: "",
      dark: "",
    },
  },
})

export default ({ children }) => {
  return <ThemeProvider theme={theme}>
    <App children={children} />
  </ThemeProvider>
}