import { useEffect, useState } from 'react';
import { Add } from './components/Add';
import { Feed } from './components/Feed';
import { Navbar } from './components/Navbar';
import { Rightbar } from './components/Rightbar';
import { Sidebar } from './components/Sidebar';
import {
  Stack,
  Box,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';

function App() {
  const storedThemePreference = localStorage.getItem('themePreference');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [mode, setMode] = useState<'dark' | 'light'>(
    prefersDarkMode ? 'dark' : 'light',
  );

  useEffect(() => {
    if (storedThemePreference) {
      setMode(storedThemePreference === 'dark' ? 'dark' : 'light');
    }
  }, [storedThemePreference]);

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const toggleThemePreference = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themePreference', newMode);
    setMode(newMode);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary" minHeight='100vh'>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={toggleThemePreference} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
