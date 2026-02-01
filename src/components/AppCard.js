import { useState } from "react";

import defaultIcon from "../assets/logo.png";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ShareIcon from "@mui/icons-material/Share";
import { Link as RouterLink } from "react-router-dom";
import ShareModal from "./ShareModal";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function AppCard({ app }) {
    const [openShare, setOpenShare] = useState(false);
    const maxTags = 2;

    return (
        <>
            <Card
                variant="elevation"
                elevation={3}
                sx={{
                    width: "100%",
                    borderRadius: 3,
                    overflow: "hidden",
                    bgcolor: "background.paper",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s ease-in-out",
                    boxShadow: (t) =>
                        t.palette.mode === "light"
                            ? "0 4px 20px rgba(0,0,0,0.05)"
                            : "0 4px 20px rgba(255,255,255,0.05)",
                    "&:hover": {
                        transform: "translateY(-4px) scale(1.01)",
                        boxShadow: (t) =>
                            t.palette.mode === "light"
                                ? "0 5px 20px rgba(0,0,0,0.12)"
                                : "0 5px 20px rgba(255,255,255,0.15)",
                    },
                }}>
                <div className="card-media-container">
                    <RouterLink
                        to={`/${app.slug}`}
                        style={{ display: "block" }}>
                        <CardMedia
                            component="img"
                            className="card-img"
                            image={app.cover}
                            alt={app.title}
                            sx={{
                                height: 200,
                                width: "100%",
                                objectFit: "cover",
                                display: "block",
                                cursor: "pointer",
                                borderBottom: "1px solid ",
                                borderColor: (t) => t.palette.primary.main,
                                transition:
                                    "transform 260ms cubic-bezier(.2,.9,.2,1)",
                            }}
                        />
                    </RouterLink>

                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            /* background:
                                "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 100%)", */
                            background: "rgba(0,0,0,0.15)",
                            pointerEvents: "none",
                        }}
                    />

                    <div className="card-avatar">
                        <Avatar
                            src={app.icon || defaultIcon}
                            alt={app.title}
                            variant="rounded"
                            sx={{
                                width: "100%",
                                height: "100%",
                                padding: "1px",
                                bgcolor: (t) =>
                                    t.palette.mode === "light"
                                        ? t.palette.grey[100]
                                        : t.palette.grey[100],
                            }}
                        />
                    </div>

                    {app.badge && (
                        <div className="card-gradient">{app.badge}</div>
                    )}
                </div>

                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        p: "10px 10px 0",
                        gap: 1,
                        flex: 1,
                    }}>
                    <Typography
                        variant="h6"
                        component="div"
                        gutterBottom
                        sx={{
                            fontWeight: 600,
                            lineHeight: 1.2,
                            minHeight: "48px",
                            /* reserve space for 2 lines */ display:
                                "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}>
                        {app.title}
                    </Typography>

                    <Stack direction="row" spacing={1}>
                        {app.tags?.slice(0, maxTags).map((t) => (
                            <Chip key={t} label={t} size="small" />
                        ))}

                        {app.tags?.length > maxTags && (
                            <Chip
                                label={`+${app.tags.length - maxTags}`}
                                size="small"
                                variant="outlined"
                            />
                        )}
                    </Stack>
                </CardContent>

                <CardActions
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "nowrap",
                        padding: "8px",
                    }}>
                    <Box>
                        <Button
                            size="small"
                            startIcon={<VisibilityIcon />}
                            component={RouterLink}
                            to={`/${app.slug}`}
                            rel="noreferrer"
                            sx={{
                                minWidth: "auto",
                                padding: "6px",
                                "& .MuiButton-startIcon": {
                                    marginRight: "4px",
                                },
                            }}>
                            Details
                        </Button>
                        {app.url && (
                            <Button
                                size="small"
                                startIcon={<OpenInNewIcon />}
                                href={app.url}
                                target="_blank"
                                rel="noreferrer"
                                sx={{
                                    "& .MuiButton-startIcon": {
                                        marginRight: "4px",
                                    },
                                }}>
                                Go Live
                            </Button>
                        )}
                    </Box>
                    <div>
                        {/* {app.github && (
                            <Button
                                size="small"
                                href={app.github}
                                target="_blank"
                                rel="noreferrer"
                                sx={{ minWidth: "auto", padding: "6px" }}>
                                <GitHubIcon
                                    sx={{ width: "20px", height: "20px" }}
                                />
                            </Button>
                        )}

                        <Button
                            size="small"
                            onClick={() => setOpenShare(true)}
                            sx={{ minWidth: "auto", padding: "6px" }}>
                            <ShareIcon sx={{ width: "20px", height: "20px" }} />
                        </Button> */}
                        {app.github && (
                            <IconButton
                                size="small"
                                href={app.github}
                                target="_blank"
                                rel="noreferrer">
                                <GitHubIcon sx={{ fontSize: 20 }} />
                            </IconButton>
                        )}

                        {app.url && (
                            <IconButton
                                size="small"
                                onClick={() => setOpenShare(true)}>
                                <ShareIcon sx={{ fontSize: 20 }} />
                            </IconButton>
                        )}
                    </div>
                </CardActions>
            </Card>

            <ShareModal
                open={openShare}
                onClose={() => setOpenShare(false)}
                title={app.title}
                url={app.url}
            />
        </>
    );
}
