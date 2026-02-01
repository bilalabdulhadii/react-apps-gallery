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
import ShareIcon from "@mui/icons-material/Share";
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
                    }}>
                    <Avatar
                        src={app.developer?.avatar}
                        alt={app.developer?.name}
                    />
                    <Box>
                        <Typography sx={{ fontWeight: 700 }}>
                            <Link
                                href={app.developer?.url}
                                target="_blank"
                                rel="noreferrer"
                                underline="none"
                                color="text.primary">
                                {app.developer?.name}
                            </Link>
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ textAlign: "justify" }}>
                            {app.developer?.bio}
                        </Typography>
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
