import { useState } from 'react';
import { Add } from './components/Add';
import { Feed } from './components/Feed';
import { Navbar } from './components/Navbar';
import { Rightbar } from './components/Rightbar';
import { Sidebar } from './components/Sidebar';
import { Stack, Box, createTheme, ThemeProvider } from '@mui/material';

function App() {
  const [mode, setMode] = useState<'dark' | 'light'>('dark');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
