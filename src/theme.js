import { createTheme } from "@mui/material/styles";

const getTheme = (mode = "dark") => {
    const isDark = mode === "dark";

    return createTheme({
        palette: {
            mode,
            primary: {
                main: isDark ? "#7c4dff" : "#3f51b5",
            },
            secondary: {
                main: isDark ? "#00e5ff" : "#00bcd4",
            },
            background: {
                default: isDark ? "#050911" : "#f2f5f8",
                paper: isDark ? "#0f1522" : "#ffffff",
            },
            text: {
                primary: isDark ? "#e6f0ff" : "#0b1220",
                secondary: isDark ? "#9fb0d8" : "#556067",
            },
        },
        typography: {
            fontFamily: "'Space Grotesk', sans-serif",
            h4: {
                fontWeight: 700,
                letterSpacing: "-0.02em",
            },
            h5: {
                fontWeight: 700,
            },
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        background: "transparent",
                        boxShadow: "none",
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        // subtle floating card style used for the inner toolbar container
                        borderRadius: 12,
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 16,
                        overflow: "hidden",
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 12,
                        textTransform: "none",
                    },
                },
            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        borderRadius: 8,
                    },
                },
            },
            MuiDialog: {
                styleOverrides: {
                    paper: {
                        borderRadius: 12,
                    },
                },
            },
        },
    });
};

export default getTheme;
