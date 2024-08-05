import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#1c1c1c",
    },
    secondary: {
      main: "#e7d46c",
    },
    error: {
      main: "#ca061d",
    },
    success:{
      main: "#00cd88",
    }
  },
  typography: {
    fontFamily: ["Noto Sans Thai", "Roboto", "sans-serif"].join(","),
    h3: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h4: {
      fontWeight: 700,
    },
    h5:{
      fontWeight: 700
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
      fontSize: 20,
    },
    subtitle1: {
      fontWeight: 700,
    },
    subtitle2: {
      fontWeight: 400,
    },
  },
});

export default theme;
