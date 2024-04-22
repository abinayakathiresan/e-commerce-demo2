import './App.css'
import Layout from './Components/templates/Layout/Layout'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ErrorBoundary from './Components/templates/ErrorBoundary/ErrorBoundary';

const theme = createTheme({
  palette: {
    primary: {
      main: "#3BB77E",
    },
  },
});
function App() {

  return (
    <>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
        <Layout/>
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
    </>
  )
}

export default App
