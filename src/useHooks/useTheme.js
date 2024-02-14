import { createTheme } from '@mui/material/styles';
import { indigo, blueGrey, grey } from '@mui/material/colors';
import { useState } from 'react';

export const useTheme = () => {
    const [mode, setMode] = useState('dark');
    const theme = createTheme({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                    primary: indigo,
                    secondary: blueGrey,
                    divider: indigo[200],
                    background: {
                        default: indigo[50],
                        paper: indigo[100],
                    },
                    text: {
                        primary: '#000',
                        secondary: indigo[900],
                    },
                }
                : {
                    primary: grey,
                    secondary: grey,
                    divider: blueGrey[200],
                    background: {
                        default: blueGrey[900],
                        paper: grey[600],
                    },
                    text: {
                        primary: '#fff',
                        secondary: blueGrey[100],
                    },
                }
            ),
        },
    });
    const colorMode = {
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
    };

    return {
        theme,
        colorMode
    };
};