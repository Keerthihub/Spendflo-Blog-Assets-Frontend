import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import Template1Render from "./Template1Render";
import { Template1DesignVarsProps, Template1Props } from "./Template1.types";
import { useDebounce } from "../../hooks/useDebounce";

const defaultSizes: Template1DesignVarsProps = {
  titleWidth: 1600,
  iconSize: 40,
  squareSize: 100,
  contentWidth: 600,
  centerGap: 50,
  rowGap: 50,
};

const Template1: React.FC<Template1Props> = ({
  title,
  contentDetailsLs,
  prevIcon,
  nextIcon,
}) => {
  const [titleWidth, setTitleWidth] = useState<number>(defaultSizes.titleWidth);
  const [iconSize, setIconSize] = useState(defaultSizes.iconSize);
  const [squareSize, setSquareSize] = useState(defaultSizes.squareSize);
  const [contentWidth, setContentWidth] = useState(defaultSizes.contentWidth);
  const [centerGap, setCenterGap] = useState(defaultSizes.centerGap);
  const [rowGap, setRowGap] = useState(defaultSizes.rowGap);

  const debouncedTitleWidth = useDebounce(titleWidth, 50);
  const debouncedIconSize = useDebounce(iconSize, 50);
  const debouncedSquareSize = useDebounce(squareSize, 50);
  const debouncedContentWidth = useDebounce(contentWidth, 50);
  const debouncedCenterGap = useDebounce(centerGap, 50);
  const debouncedRowGap = useDebounce(rowGap, 50);

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: "flex", gap: "10px", mb: 2 }}>
        <TextField
          label="Title Width"
          variant="outlined"
          type="number"
          size="small"
          value={titleWidth}
          onChange={(e) => setTitleWidth(Number(e.target.value))}
        />
        <TextField
          label="Icon Size"
          variant="outlined"
          type="number"
          size="small"
          value={iconSize}
          onChange={(e) => setIconSize(Number(e.target.value))}
        />
        <TextField
          label="Square Size"
          variant="outlined"
          type="number"
          size="small"
          value={squareSize}
          onChange={(e) => setSquareSize(Number(e.target.value))}
        />
        <TextField
          label="Content Width"
          variant="outlined"
          type="number"
          size="small"
          value={contentWidth}
          onChange={(e) => setContentWidth(Number(e.target.value))}
        />

        <TextField
          label="Center Gap"
          variant="outlined"
          type="number"
          size="small"
          value={centerGap}
          onChange={(e) => setCenterGap(Number(e.target.value))}
        />

        <TextField
          label="Row Gap"
          variant="outlined"
          type="number"
          size="small"
          value={rowGap}
          onChange={(e) => setRowGap(Number(e.target.value))}
        />
      </Box>
      <Template1Render
        titleWidth={debouncedTitleWidth}
        iconSize={debouncedIconSize}
        squareSize={debouncedSquareSize}
        contentWidth={debouncedContentWidth}
        centerGap={debouncedCenterGap}
        rowGap={debouncedRowGap}
        title={title}
        contentDetailsLs={contentDetailsLs}
        prevIcon={prevIcon}
        nextIcon={nextIcon}
      />
    </Box>
  );
};

export default Template1;
