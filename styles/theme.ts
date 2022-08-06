import {createTheme} from "@mui/material/styles"
import {variables} from "./variables";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#90BD3A",
            light: "#a5cb5d",
            dark: "#81aa35",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#81aa35",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                textPrimary: {
                    backgroundColor: variables.colors.green,
                    color: variables.colors.white,
                    "&:hover": {
                        color: variables.colors.green,
                    }
                }
            }
        }
    }
})