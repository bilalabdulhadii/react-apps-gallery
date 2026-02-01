import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <Box sx={{ height: { xs: "140px", lg: "170px" } }} />
            <Box
                component="footer"
                sx={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    margin: "0 auto 10px",
                    display: "flex",
                    justifyContent: "center",
                    pointerEvents: "none",
                }}>
                <Container maxWidth="md">
                    <Box
                        sx={{
                            pointerEvents: "auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: { xs: 1.5, lg: 2 },
                            width: "100%",
                            bgcolor: (t) =>
                                t.palette.mode === "light"
                                    ? "rgba(255, 255, 255, 0.75)"
                                    : "rgba(15, 21, 34, 0.75)",
                            boxShadow: (t) =>
                                t.palette.mode === "light"
                                    ? "0 4px 20px rgba(0, 0, 0, 0.08)"
                                    : "0 4px 20px rgba(255, 255, 255, 0.1)",
                            border: (t) =>
                                t.palette.mode === "light"
                                    ? "1px solid rgba(255, 255, 255, 0.6)"
                                    : "1px solid rgba(255, 255, 255, 0.08)",
                            backdropFilter: "blur(20px)",
                            borderRadius: "50px",
                            px: { xs: 2, lg: 3 },
                            py: { xs: 1.5, lg: 2 },
                            transition: "all 0.3s ease",
                        }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", sm: "row" },
                                alignItems: "center",
                                justifyContent: "center",
                                gap: { xs: 1, lg: 2 },
                                width: "100%",
                            }}>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: 600,
                                    color: "text.main",
                                    textAlign: { xs: "center", sm: "left" },
                                }}>
                                © {currentYear} Bilal Abdulhadi. All rights
                                reserved.
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                width: "100%",
                                pt: { xs: 1.5, lg: 2 },
                                borderTop: (t) =>
                                    t.palette.mode === "light"
                                        ? "1px solid rgba(0,0,0,0.06)"
                                        : "1px solid rgba(255,255,255,0.06)",
                            }}>
                            <Stack direction="row" spacing={1}>
                                {[
                                    {
                                        icon: <LanguageIcon fontSize="small" />,
                                        url: "https://bilalabdulhadi.com",
                                        title: "Website",
                                    },
                                    {
                                        icon: <GitHubIcon fontSize="small" />,
                                        url: "https://github.com/bilalabdulhadii",
                                        title: "GitHub",
                                    },
                                    {
                                        icon: <EmailIcon fontSize="small" />,
                                        url: "mailto:bilalabdulhadi88@gmail.com",
                                        title: "Contact",
                                    },
                                    {
                                        icon: <LinkedInIcon fontSize="small" />,
                                        url: "https://www.linkedin.com/in/bilalabdulhadii",
                                        title: "LinkedIn",
                                    },
                                    {
                                        icon: (
                                            <InstagramIcon fontSize="small" />
                                        ),
                                        url: "https://www.instagram.com/bilalabdulhadii",
                                        title: "Instagram",
                                    },
                                    {
                                        icon: <FacebookIcon fontSize="small" />,
                                        url: "https://www.facebook.com/bilalabdulhadii",
                                        title: "Facebook",
                                    },
                                ].map((social) => (
                                    <Tooltip
                                        key={social.title}
                                        title={social.title}>
                                        <IconButton
                                            size="small"
                                            href={social.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            sx={{
                                                color: "text.primary",
                                                transition: "all 0.2s",
                                                "&:hover": {
                                                    color: "primary.main",
                                                    transform:
                                                        "translateY(-2px)",
                                                },
                                            }}>
                                            {social.icon}
                                        </IconButton>
                                    </Tooltip>
                                ))}
                            </Stack>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
