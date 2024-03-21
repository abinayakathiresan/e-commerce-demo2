import { useState } from 'react'
import './App.css'
import Layout from './Components/templates/Layout/Layout'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#3BB77E",
    },
  },
});
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <ThemeProvider theme={theme}><Layout/></ThemeProvider>
    </BrowserRouter>
    </>
  )
}

export default App
