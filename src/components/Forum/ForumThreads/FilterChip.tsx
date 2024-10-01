import { Chip, type SxProps } from "@mui/material";
import React from "react";

export type FilterChipProps = {
  label: string;
  icon?: React.ReactElement;
  onClick?: () => void;
  selected?: boolean;
  sx?: SxProps;
};

const FilterChip = ({
  label,
  icon,
  onClick,
  selected,
  sx,
}: FilterChipProps) => {
  return (
    <Chip
      label={label}
      color={selected ? "primary" : "default"}
      size="small"
      icon={icon}
      onClick={onClick}
      sx={{
        ...sx,
      }}
    />
  );
};

export default FilterChip;
