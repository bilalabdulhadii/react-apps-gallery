import { useState, useRef, useEffect } from "react";

import { Dialog, DialogContent, IconButton, Box, Stack } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ImageModal({
    open,
    onClose,
    images,
    currentIndex,
    onNavigate,
    alt,
}) {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const dragStart = useRef({ x: 0, y: 0 });
    const src = images ? images[currentIndex] : "";

    useEffect(() => {
        if (!open) {
            setScale(1);
            setPosition({ x: 0, y: 0 });
        }
    }, [open]);

    useEffect(() => {
        setScale(1);
        setPosition({ x: 0, y: 0 });
    }, [currentIndex]);

    useEffect(() => {
        if (!open) return;
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") {
                handleNext(e);
            } else if (e.key === "ArrowLeft") {
                handlePrev(e);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, currentIndex, images]);

    const handleNext = (e) => {
        e?.stopPropagation();
        if (images && currentIndex < images.length - 1) {
            onNavigate(currentIndex + 1);
        }
    };

    const handlePrev = (e) => {
        e?.stopPropagation();
        if (currentIndex > 0) {
            onNavigate(currentIndex - 1);
        }
    };

    const handleZoomIn = (e) => {
        e.stopPropagation();
        setScale((prev) => Math.min(prev + 0.5, 4));
    };

    const handleZoomOut = (e) => {
        e.stopPropagation();
        setScale((prev) => Math.max(prev - 0.5, 1));
    };

    const handleReset = (e) => {
        e.stopPropagation();
        setScale(1);
        setPosition({ x: 0, y: 0 });
    };

    const handleMouseDown = (e) => {
        if (scale > 1) {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(true);
            dragStart.current = {
                x: e.clientX - position.x,
                y: e.clientY - position.y,
            };
        } else {
            e.stopPropagation();
        }
    };

    const handleMouseMove = (e) => {
        if (isDragging && scale > 1) {
            e.preventDefault();
            e.stopPropagation();
            setPosition({
                x: e.clientX - dragStart.current.x,
                y: e.clientY - dragStart.current.y,
            });
        }
    };

    const handleMouseUp = (e) => {
        if (isDragging) {
            e.stopPropagation();
            setIsDragging(false);
        }
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="lg"
            fullWidth
            PaperProps={{
                sx: {
                    bgcolor: "transparent",
                    boxShadow: "none",
                    position: "relative",
                },
                onClick: onClose,
            }}>
            <DialogContent
                sx={{
                    bgcolor: "transparent",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    position: "relative",
                }}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}>
                {currentIndex > 0 && (
                    <IconButton
                        onClick={handlePrev}
                        sx={{
                            position: "absolute",
                            left: 16,
                            color: "#fff",
                            bgcolor: "rgba(0,0,0,0.3)",
                            "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
                            zIndex: 20,
                        }}>
                        <ArrowBackIosNewIcon />
                    </IconButton>
                )}

                {images && currentIndex < images.length - 1 && (
                    <IconButton
                        onClick={handleNext}
                        sx={{
                            position: "absolute",
                            right: 16,
                            color: "#fff",
                            bgcolor: "rgba(0,0,0,0.3)",
                            "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
                            zIndex: 20,
                        }}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                )}

                <Box
                    component="img"
                    src={src}
                    alt={alt}
                    onMouseDown={handleMouseDown}
                    onClick={(e) => e.stopPropagation()}
                    sx={{
                        maxHeight: "80vh",
                        maxWidth: "100%",
                        width: "auto",
                        borderRadius: 2,
                        boxShadow: 6,
                        objectFit: "contain",
                        cursor:
                            scale > 1
                                ? isDragging
                                    ? "grabbing"
                                    : "grab"
                                : "default",
                        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                        transition: isDragging ? "none" : "transform 0.3s ease",
                    }}
                />
            </DialogContent>

            <Box
                sx={{
                    position: "absolute",
                    bottom: 24,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 10,
                    bgcolor: "rgba(0,0,0,0.6)",
                    borderRadius: 8,
                    px: 2,
                    py: 1,
                    backdropFilter: "blur(4px)",
                }}
                onClick={(e) => e.stopPropagation()}>
                <Stack direction="row" spacing={1}>
                    <IconButton
                        onClick={handleZoomOut}
                        sx={{ color: "#fff" }}
                        disabled={scale <= 1}>
                        <ZoomOutIcon />
                    </IconButton>
                    <IconButton onClick={handleReset} sx={{ color: "#fff" }}>
                        <RestartAltIcon />
                    </IconButton>
                    <IconButton
                        onClick={handleZoomIn}
                        sx={{ color: "#fff" }}
                        disabled={scale >= 4}>
                        <ZoomInIcon />
                    </IconButton>
                    <IconButton onClick={onClose} sx={{ color: "#fff" }}>
                        <CloseIcon />
                    </IconButton>
                </Stack>
            </Box>
        </Dialog>
    );
}
