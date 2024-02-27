import { useContext } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import ColorModeContext from './context/ColorModeContext';

const CustomThemeColor = () => {
  const colorMode = useContext(ColorModeContext);
  return <Box>
    <IconButton onClick={colorMode.toggleColorMode}>
      <InvertColorsIcon color="secondary" />
    </IconButton>
  </Box>;
};

export default CustomThemeColor;