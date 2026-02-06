import { useState, useEffect } from "react";
import defaultIcon from "../assets/logo.png";
import { useParams, useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import ShareIcon from "@mui/icons-material/Share";
import LanguageIcon from "@mui/icons-material/Language";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CloseIcon from "@mui/icons-material/Close";
import appsData from "../data/apps";
import Chip from "@mui/material/Chip";
import ShareModal from "../components/ShareModal";
import ImageModal from "../components/ImageModal";
import Avatar from "@mui/material/Avatar";
import { Divider, Modal } from "@mui/material";
import ReactMarkdown from "react-markdown";

export default function Detail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const app = appsData.find((a) => a.slug === slug);
    const [openShare, setOpenShare] = useState(false);
    const [openImg, setOpenImg] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);
    const [showFull, setShowFull] = useState(false);
    const [openDeveloper, setOpenDeveloper] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!app)
        return (
            <Container sx={{ paddingY: 4 }}>
                <Typography>App not found</Typography>
            </Container>
        );

    const previewText = app.description
        ? app.description.split("\n").slice(0, 3).join("\n")
        : "";

    const openFull = (index) => {
        setImgIndex(index);
        setOpenImg(true);
    };

    const developerSocials = app.developer
        ? [
              {
                  key: "website",
                  label: "Website",
                  href: app.developer.url,
                  icon: <LanguageIcon fontSize="small" />,
              },
              {
                  key: "github",
                  label: "GitHub",
                  href: app.developer.github,
                  icon: <GitHubIcon fontSize="small" />,
              },
              {
                  key: "linkedin",
                  label: "LinkedIn",
                  href: app.developer.linkedin,
                  icon: <LinkedInIcon fontSize="small" />,
              },
              {
                  key: "instagram",
                  label: "Instagram",
                  href: app.developer.instagram,
                  icon: <InstagramIcon fontSize="small" />,
              },
              {
                  key: "facebook",
                  label: "Facebook",
                  href: app.developer.facebook,
                  icon: <FacebookIcon fontSize="small" />,
              },
          ].filter((item) => Boolean(item.href))
        : [];

    const openDeveloperModal = () => {
        if (app.developer) setOpenDeveloper(true);
    };

    return (
        <Container sx={{ paddingY: 4 }}>
            <Box className="app-header">
                <IconButton
                    onClick={() => navigate("/")}
                    sx={{ flexShrink: 0 }}>
                    <ArrowBackIcon />
                </IconButton>

                <Box
                    className="app-icon"
                    sx={{
                        flexShrink: 0,
                        width: { xs: 64, md: 80, lg: 96 },
                        height: { xs: 64, md: 80, lg: 96 },
                    }}>
                    <Avatar
                        src={app.icon || defaultIcon}
                        alt={app.title}
                        variant="square"
                        sx={{
                            width: "100%",
                            height: "100%",
                            p: 1,
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            bgcolor: (t) =>
                                t.palette.mode === "light"
                                    ? t.palette.grey[100]
                                    : t.palette.grey[200],
                        }}
                    />
                </Box>

                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: 800, wordWrap: "break-word" }}>
                        {app.title}
                    </Typography>
                    {app.url && (
                        <Typography variant="body2" color="text.secondary">
                            <Link
                                href={app.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="none"
                                color="primary"
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    wordBreak: "break-all",
                                }}>
                                <OpenInNewIcon
                                    sx={{ verticalAlign: "middle", mr: 0.5 }}
                                    fontSize="small"
                                />
                                {app.url}
                            </Link>
                        </Typography>
                    )}
                </Box>
            </Box>

            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 5 }}>
                {app.url && (
                    <Button
                        variant="contained"
                        startIcon={<OpenInNewIcon />}
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        Go Live
                    </Button>
                )}

                {app.github && (
                    <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        href={app.github}
                        target="_blank"
                        rel="noreferrer">
                        Source
                    </Button>
                )}

                {app.url && (
                    <Button
                        variant="outlined"
                        startIcon={<ShareIcon />}
                        onClick={() => setOpenShare(true)}>
                        Share
                    </Button>
                )}
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mt: 2 }}>
                {/* Description Preview Box */}
                <Box
                    sx={{
                        position: "relative",
                        maxHeight: 180,
                        overflow: "hidden",
                        textAlign: "justify",
                        "& p": {
                            textAlign: "justify",
                            lineHeight: 1.8,
                        },
                    }}>
                    <ReactMarkdown>{previewText}</ReactMarkdown>

                    {/* Fade Effect */}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: 60,
                            background: (t) =>
                                t.palette.mode === "light"
                                    ? "linear-gradient(to top, rgba(242, 245, 248, 1), rgba(242, 245, 248, 0))"
                                    : "linear-gradient(to top, rgba(5, 9, 17, 1), rgba(5, 9, 17, 0))",
                        }}
                    />
                </Box>

                {/* Inline Read More */}
                <Typography
                    onClick={() => setShowFull(true)}
                    sx={{
                        mt: 1,
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                        color: "primary.main",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                    }}>
                    Read more <span style={{ fontSize: "1rem" }}>→</span>
                </Typography>

                {/* Full Description Modal */}
                <Modal open={showFull} onClose={() => setShowFull(false)}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: { xs: "90%", md: "70%" },
                            maxHeight: "80vh",
                            overflowY: "auto",
                            bgcolor: "background.paper",
                            p: 4,
                            borderRadius: 3,
                            boxShadow: 24,
                            textAlign: "justify",
                            "& p": {
                                textAlign: "justify",
                                lineHeight: 1.8,
                            },
                        }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 2,
                            }}>
                            <Typography variant="h5">
                                About {app.title}
                            </Typography>
                            <IconButton onClick={() => setShowFull(false)}>
                                <CloseIcon />
                            </IconButton>
                        </Box>

                        <ReactMarkdown>{app.description}</ReactMarkdown>
                    </Box>
                </Modal>

                <Modal
                    open={openDeveloper}
                    onClose={() => setOpenDeveloper(false)}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: { xs: "92%", md: 560 },
                            bgcolor: "background.paper",
                            boxShadow: "0 30px 80px rgba(12, 18, 28, 0.28)",
                            p: 3,
                            borderRadius: 3,
                            maxHeight: "85vh",
                            overflowY: "auto",
                            background:
                                "linear-gradient(160deg, rgba(255,255,255,0.92) 0%, rgba(245,248,252,0.95) 100%)",
                            border: "1px solid rgba(255,255,255,0.6)",
                            backdropFilter: "blur(14px)",
                            "&:before": {
                                content: '""',
                                position: "absolute",
                                top: -40,
                                right: -40,
                                width: 140,
                                height: 140,
                                borderRadius: "50%",
                                background:
                                    "radial-gradient(circle, rgba(63,131,248,0.25) 0%, rgba(63,131,248,0) 70%)",
                                pointerEvents: "none",
                            },
                            "&:after": {
                                content: '""',
                                position: "absolute",
                                bottom: -50,
                                left: -50,
                                width: 160,
                                height: 160,
                                borderRadius: "50%",
                                background:
                                    "radial-gradient(circle, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0) 70%)",
                                pointerEvents: "none",
                            },
                        }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 2,
                            }}>
                            <Box>
                                <Typography variant="overline" sx={{ opacity: 0.6 }}>
                                    Developer profile
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                    Creative builder
                                </Typography>
                            </Box>
                            <IconButton
                                onClick={() => setOpenDeveloper(false)}>
                                <CloseIcon />
                            </IconButton>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                mb: 2,
                                p: 2,
                                borderRadius: 2,
                                background:
                                    "linear-gradient(120deg, rgba(15,23,42,0.08) 0%, rgba(59,130,246,0.08) 100%)",
                                border: "1px solid rgba(15,23,42,0.08)",
                            }}>
                            <Avatar
                                src={app.developer?.avatar}
                                alt={app.developer?.name}
                                sx={{
                                    width: 72,
                                    height: 72,
                                    border: "2px solid rgba(255,255,255,0.7)",
                                }}
                            />
                            <Box sx={{ minWidth: 0 }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                    }}>
                                    <Typography
                                        variant="h6"
                                        sx={{ mb: 0.25, fontWeight: 700 }}>
                                        {app.developer?.name}
                                    </Typography>
                                    {app.developer?.url && (
                                        <IconButton
                                            href={app.developer.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            size="small"
                                            aria-label="Website">
                                            <OpenInNewIcon fontSize="small" />
                                        </IconButton>
                                    )}
                                </Box>
                                {app.developer?.role && (
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 0.5,
                                            px: 1,
                                            py: 0.25,
                                            borderRadius: 999,
                                            background:
                                                "rgba(59,130,246,0.12)",
                                            color: "primary.main",
                                            fontWeight: 600,
                                            width: "fit-content",
                                        }}>
                                        {app.developer.role}
                                    </Typography>
                                )}
                            </Box>
                        </Box>

                        {app.developer?.bio && (
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ textAlign: "justify" }}>
                                {app.developer.bio}
                            </Typography>
                        )}

                        {developerSocials.length > 0 && (
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 0.5,
                                    mt: 2,
                                    flexWrap: "wrap",
                                }}>
                                {developerSocials.map((social) => (
                                    <IconButton
                                        key={social.key}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        size="small"
                                        aria-label={social.label}
                                        sx={{
                                            bgcolor: "rgba(15,23,42,0.06)",
                                            "&:hover": {
                                                bgcolor:
                                                    "rgba(15,23,42,0.12)",
                                            },
                                        }}>
                                        {social.icon}
                                    </IconButton>
                                ))}
                            </Box>
                        )}
                    </Box>
                </Modal>

                <Box
                    sx={{
                        display: "flex",
                        gap: 1,
                        my: 4,
                        flexWrap: "wrap",
                    }}>
                    {app.tags?.map((t) => (
                        <Chip key={t} label={t} />
                    ))}
                </Box>

                <Typography variant="subtitle1" sx={{ mt: 2 }}>
                    About the developer
                </Typography>
                <Box
                    className="dev-card"
                    sx={{
                        mt: 1,
                        cursor: app.developer ? "pointer" : "default",
                    }}
                    onClick={openDeveloperModal}>
                    <Avatar
                        src={app.developer?.avatar}
                        alt={app.developer?.name}
                    />
                    <Box>
                        <Typography sx={{ fontWeight: 700 }}>
                            {app.developer?.name}
                        </Typography>
                        {app.developer?.role && (
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 0.5 }}>
                                {app.developer.role}
                            </Typography>
                        )}
                    </Box>
                </Box>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                    Screenshots
                </Typography>
                <div className="gallery-masonry">
                    {app.images?.map((src, i) => (
                        <div key={i} className="masonry-item">
                            <img
                                src={src}
                                alt={`${app.title}-${i}`}
                                onClick={() => openFull(i)}
                            />
                        </div>
                    ))}
                </div>
            </Box>

            <ShareModal
                open={openShare}
                onClose={() => setOpenShare(false)}
                title={app.title}
                url={app.url}
            />
            <ImageModal
                open={openImg}
                onClose={() => setOpenImg(false)}
                images={app.images}
                currentIndex={imgIndex}
                onNavigate={setImgIndex}
                alt={app.title}
            />
        </Container>
    );
}
