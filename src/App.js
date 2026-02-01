import { useMemo, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Gallery from "./pages/Gallery";
import Detail from "./pages/Detail";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import getTheme from "./theme";
import "./App.css";

function App() {
    const [mode, setMode] = useState(
        () => localStorage.getItem("theme") || "dark",
    );
    const theme = useMemo(() => getTheme(mode), [mode]);

    useEffect(() => {
        // Ensure default theme is dark when unset
        if (!localStorage.getItem("theme"))
            localStorage.setItem("theme", "dark");
    }, []);

    const toggleTheme = () => {
        const next = mode === "dark" ? "light" : "dark";
        setMode(next);
        localStorage.setItem("theme", next);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Box
                    className="app-root"
                    sx={{
                        bgcolor: "background.default",
                        backgroundImage: (t) =>
                            t.palette.mode === "light"
                                ? "radial-gradient(circle at 15% 50%, rgba(124, 77, 255, 0.05), transparent 25%), radial-gradient(circle at 85% 30%, rgba(0, 229, 255, 0.05), transparent 25%)"
                                : "radial-gradient(circle at 15% 50%, rgba(124, 77, 255, 0.1), transparent 25%), radial-gradient(circle at 85% 30%, rgba(0, 229, 255, 0.1), transparent 25%)",
                    }}>
                    <AppBar
                        position="sticky"
                        elevation={3}
                        sx={{ pt: 3, pb: 2, bgcolor: "transparent" }}>
                        <Container maxWidth="md">
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0,
                                    bgcolor: (t) =>
                                        t.palette.mode === "light"
                                            ? "rgba(255, 255, 255, 0.75)"
                                            : "rgba(15, 21, 34, 0.75)",
                                    boxShadow: (t) =>
                                        t.palette.mode === "light"
                                            ? "0 8px 32px rgba(0, 0, 0, 0.08)"
                                            : "0 8px 32px rgba(255, 255, 255, 0.1)",
                                    border: (t) =>
                                        t.palette.mode === "light"
                                            ? "1px solid rgba(255, 255, 255, 0.6)"
                                            : "1px solid rgba(255, 255, 255, 0.08)",
                                    backdropFilter: "blur(20px)",
                                    borderRadius: "50px",
                                    height: "64px",
                                    px: 3,
                                    transition: "all 0.3s ease",
                                }}>
                                <Box
                                    component={Link}
                                    to="/"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.5,
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}>
                                    <Logo size={32} />
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 800,
                                            letterSpacing: "-0.02em",
                                            background: (t) =>
                                                t.palette.mode === "light"
                                                    ? "linear-gradient(135deg, #2f3a8f 0%, #7c4dff 100%)"
                                                    : "linear-gradient(135deg, #e6f0ff 0%, #94b3ff 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}>
                                        Apps Gallery
                                    </Typography>
                                </Box>

                                <Box sx={{ flex: 1 }} />

                                <IconButton
                                    color="inherit"
                                    href="https://github.com/bilalabdulhadii"
                                    target="_blank"
                                    rel="noreferrer"
                                    title="My GitHub"
                                    sx={{
                                        color: (t) =>
                                            t.palette.mode === "light"
                                                ? "#3f51b5"
                                                : "#94b3ff",
                                    }}>
                                    <GitHubIcon />
                                </IconButton>

                                <IconButton
                                    onClick={toggleTheme}
                                    sx={{
                                        ml: 0.5,
                                        color:
                                            mode === "dark"
                                                ? "#94b3ff"
                                                : "#3f51b5",
                                    }}
                                    title="Toggle theme">
                                    {mode === "dark" ? (
                                        <LightModeIcon />
                                    ) : (
                                        <DarkModeIcon />
                                    )}
                                </IconButton>
                            </Box>
                        </Container>
                    </AppBar>

                    <Container
                        maxWidth="md"
                        component="main"
                        className="app-main">
                        <Routes>
                            <Route path="/" element={<Gallery />} />
                            <Route path="/:slug" element={<Detail />} />
                        </Routes>
                    </Container>

                    <Container maxWidth="md">
                        <Footer />
                    </Container>
                </Box>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
