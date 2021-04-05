import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export const theme = createMuiTheme({
  palette: {
    secondary: {
      light: grey[400],
      main: grey[500],
      dark: grey[700],
      contrastText: '#fff',
    },
  },
  transitions: {
    duration: {
      complex: 1000,
    },
  },
});
