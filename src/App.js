import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router.js";
import { QueryClient, QueryClientProvider } from 'react-query';
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import ColorModeContext from "./utils/context/ColorModeContext.js";
import { useTheme } from './useHooks/useTheme.js';

export default function App() {
  const queryClient = new QueryClient();
  const { theme, colorMode } = useTheme();

  return <div className='app'>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  </div >
}