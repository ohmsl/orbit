"use client";
import { Card, darken, styled } from "@mui/material";

export const CategoryCard = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundImage: `linear-gradient(to top left, ${darken(
    theme.palette.primary.light,
    0.7
  )} 0%, var(--orbit-palette-background-paper) 50%)`,
}));
