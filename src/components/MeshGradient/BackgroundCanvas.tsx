"use client";
import type { MuiColorOptions } from "@/types/MuiColorOptions.js";
import { useTheme } from "@mui/material";
import { useEffect, useRef } from "react";
import { Gradient } from "./MeshGradient.js";

type BackgroundCanvasProps = {
  color?: MuiColorOptions;
};

const BackgroundCanvas = ({ color = "primary" }: BackgroundCanvasProps) => {
  const canvasRef = useRef(null);
  const gradient = new Gradient();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (gradient as any).initGradient("#gradient-canvas");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const palette = useTheme().vars.palette;

  return (
    <canvas
      id="gradient-canvas"
      ref={canvasRef}
      data-transition-in
      data-js-darken-top
      style={
        {
          position: "absolute",
          inset: 0,
          "--gradient-color-1": palette[color].main,
          "--gradient-color-2": palette[color].light,
          "--gradient-color-3": palette[color].dark,
          "--gradient-color-4": palette[color].light,
        } as React.CSSProperties
      }
    />
  );
};

export default BackgroundCanvas;
