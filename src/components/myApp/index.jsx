import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const MyApp = () => {
  const [darkMode, setDarkMode] = useState(false); // Отслеживаем текущую тему

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          {darkMode ? 'Тёмная тема' : 'Светлая тема'}
        </Typography>
        <Button variant="contained" onClick={toggleTheme}>
          Переключить тему
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default MyApp;