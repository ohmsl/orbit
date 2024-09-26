"use client";
import type { MuiColorOptions } from "@/types/MuiColorOptions";
import { Box, Card, Typography } from "@mui/material";
import type React from "react";
import BackgroundCanvas from "../MeshGradient/BackgroundCanvas";

type HeroProps = {
  title: string | React.ReactElement;
  subtitle: string | React.ReactElement;
  gradientColor?: MuiColorOptions;
};

const Hero = ({ title, subtitle, gradientColor }: HeroProps) => {
  return (
    <Card
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        color: "white",
        p: 6,
        mb: 4,
      }}
    >
      <BackgroundCanvas color={gradientColor} />
      <Box sx={{ zIndex: 0 }}>
        <Typography variant="h2" component="h1">
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          component="h2"
          gutterBottom
          sx={{ opacity: 0.9 }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Card>
  );
};

export default Hero;
