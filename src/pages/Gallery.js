import React, { useState, useEffect, useRef, useMemo } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AppCard from "../components/AppCard";
import appsData from "../data/apps";

export default function Gallery() {
    const [query, setQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState(null);
    const scrollRef = useRef(0);

    useEffect(() => {
        const savedScroll = sessionStorage.getItem("galleryScroll");
        if (savedScroll) {
            const y = parseInt(savedScroll, 10);
            window.scrollTo(0, y);
            scrollRef.current = y;
        }

        const handleScroll = () => {
            scrollRef.current = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            sessionStorage.setItem("galleryScroll", scrollRef.current);
        };
    }, []);

    const { allTags, tagCounts } = useMemo(() => {
        const counts = {};
        const tags = new Set();
        appsData.forEach((app) => {
            app.tags?.forEach((tag) => {
                tags.add(tag);
                counts[tag] = (counts[tag] || 0) + 1;
            });
        });
        return { allTags: Array.from(tags).sort(), tagCounts: counts };
    }, []);

    const filtered = useMemo(
        () =>
            appsData.filter((a) => {
                const matchesSearch =
                    a.title.toLowerCase().includes(query.toLowerCase()) ||
                    a.tags
                        ?.join(" ")
                        .toLowerCase()
                        .includes(query.toLowerCase()) ||
                    a.developer?.name
                        ?.toLowerCase()
                        ?.includes(query.toLowerCase());
                const matchesTag = selectedTag
                    ? a.tags?.includes(selectedTag)
                    : true;
                return matchesSearch && matchesTag;
            }),
        [query, selectedTag],
    );

    return (
        <Box sx={{ paddingY: 4 }}>
            <Box sx={{ mb: 4 }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                        mb: 3,
                    }}>
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: 800, color: "primary.main" }}>
                        Discover Projects
                    </Typography>
                    <TextField
                        size="small"
                        placeholder="Search apps or tags"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        sx={{
                            "& .MuiInputBase-root": {
                                background: (t) =>
                                    t.palette.mode === "light"
                                        ? "#fff"
                                        : "rgba(255,255,255,0.04)",
                            },
                            "& .MuiInputBase-input": {
                                color: (t) =>
                                    t.palette.mode === "light"
                                        ? "#0b1220"
                                        : "#e6f0ff",
                                "::placeholder": {
                                    color: (t) =>
                                        t.palette.mode === "light"
                                            ? "rgba(11,18,32,0.6)"
                                            : "rgba(255,255,255,0.5)",
                                },
                            },
                        }}
                    />
                </Box>

                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        overflowX: "auto",
                        pb: 0.5,
                        scrollbarWidth: "none",
                        "&::-webkit-scrollbar": { display: "none" },
                    }}>
                    <Chip
                        label={`All (${appsData.length})`}
                        onClick={() => setSelectedTag(null)}
                        color={selectedTag === null ? "primary" : "default"}
                        variant={selectedTag === null ? "filled" : "outlined"}
                        clickable
                    />
                    {allTags.map((tag) => (
                        <Chip
                            key={tag}
                            label={`${tag} (${tagCounts[tag]})`}
                            onClick={() =>
                                setSelectedTag(tag === selectedTag ? null : tag)
                            }
                            color={selectedTag === tag ? "primary" : "default"}
                            variant={
                                selectedTag === tag ? "filled" : "outlined"
                            }
                            clickable
                        />
                    ))}
                </Stack>
            </Box>

            <Box className="gallery-grid">
                {filtered.map((app) => (
                    <div key={app.id} className="grid-item">
                        <AppCard app={app} />
                    </div>
                ))}
            </Box>
        </Box>
    );
}
