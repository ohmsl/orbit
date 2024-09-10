"use client";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import React, { Suspense } from "react";
import { mainTheme } from "../themes/mainTheme";

const AppProviders = ({
  children,
  themeOverride,
}: {
  children: React.ReactNode;
  themeOverride?: Theme;
}) => {
  return (
    <ThemeProvider theme={themeOverride || mainTheme}>
      <CssBaseline />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </ThemeProvider>
  );
};

export default AppProviders;
