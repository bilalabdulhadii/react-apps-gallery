import React, { useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { FiCopy, FiDownload } from "react-icons/fi";
import QRCode from "react-qr-code";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ShareModal({ open, onClose, title, url }) {
    const svgRef = useRef(null);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            alert("URL copied to clipboard");
        } catch (err) {
            alert("Copy failed");
        }
    };

    const handleDownloadPNG = () => {
        const svg = svgRef.current?.querySelector("svg");
        if (!svg) return alert("QR not found");

        const serializer = new XMLSerializer();
        const svgData = serializer.serializeToString(svg);

        const svgBlob = new Blob([svgData], {
            type: "image/svg+xml;charset=utf-8",
        });

        const url = URL.createObjectURL(svgBlob);

        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement("canvas");

            // ✅ Higher resolution export
            const size = 1000;
            canvas.width = size;
            canvas.height = size;

            const ctx = canvas.getContext("2d");

            // ✅ White background
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, size, size);
            ctx.drawImage(img, 50, 50, size - 100, size - 100);

            // ✅ Convert to PNG
            const pngFile = canvas.toDataURL("image/png");

            // ✅ Download automatically
            const link = document.createElement("a");
            link.href = pngFile;
            link.download = `${title || "qr-code"}.png`;
            link.click();

            URL.revokeObjectURL(url);
        };

        img.src = url;
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
            <DialogTitle
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                Share
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                    }}>
                    <Typography variant="subtitle1">{title}</Typography>
                    <Box ref={svgRef} sx={{ padding: 2, background: "#fff" }}>
                        <QRCode value={url} size={160} />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        {url}
                    </Typography>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button startIcon={<FiCopy />} onClick={handleCopy}>
                    Copy link
                </Button>
                <Button startIcon={<FiDownload />} onClick={handleDownloadPNG}>
                    Download QR
                </Button>
            </DialogActions>
        </Dialog>
    );
}
