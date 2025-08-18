import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import Template5Render from "./Template5Render";
import { Template5DesignVarsProps, Template5Props } from "./Template5.types";
import { useDebounce } from "../../hooks/useDebounce";
import NumberInput from "../NumberInput";

const defaultSizes: Template5DesignVarsProps = {
  titleWidth: 1600,
  iconSize: 40,
  height: 300,
  boxHeight: 120,
  contentWidth: 300,
  columnGap: 20,
};

const Template5: React.FC<Template5Props> = ({
  title,
  contentDetailsLs,
  prevIcon,
  nextIcon,
}) => {
  const [titleWidth, setTitleWidth] = useState<number>(defaultSizes.titleWidth);
  const [iconSize, setIconSize] = useState(defaultSizes.iconSize);
  const [height, setHeight] = useState(defaultSizes.height);
  const [boxHeight, setBoxHeight] = useState(defaultSizes.boxHeight);
  const [contentWidth, setContentWidth] = useState(defaultSizes.contentWidth);
  const [columnGap, setColumnGap] = useState(defaultSizes.columnGap);

  const debouncedTitleWidth = useDebounce(titleWidth, 50);
  const debouncedIconSize = useDebounce(iconSize, 50);
  const debouncedHeight = useDebounce(height, 50);
  const debouncedBoxHeight = useDebounce(boxHeight, 50);
  const debouncedContentWidth = useDebounce(contentWidth, 50);
  const debouncedColumnGap = useDebounce(columnGap, 50);

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: "flex", gap: "10px", mb: 2 }}>
        <NumberInput
          label="Title Width"
          value={titleWidth}
          onChange={(value) => setTitleWidth(value)}
          step={20}
        />
        <NumberInput
          label="Icon Size"
          value={iconSize}
          onChange={(value) => setIconSize(Number(value))}
          step={4}
        />
        <NumberInput
          label="Height"
          value={height}
          onChange={(value) => setHeight(value)}
          step={2}
        />
        <NumberInput
          label="Box Height"
          value={boxHeight}
          onChange={(value) => setBoxHeight(value)}
          step={2}
        />
        <NumberInput
          label="Content Width"
          value={contentWidth}
          onChange={(value) => setContentWidth(value)}
          step={5}
        />

        <NumberInput
          label="Column Gap"
          value={columnGap}
          onChange={(value) => setColumnGap(value)}
          step={3}
        />
      </Box>
      <Template5Render
        titleWidth={debouncedTitleWidth}
        iconSize={debouncedIconSize}
        height={debouncedHeight}
        boxHeight={debouncedBoxHeight}
        contentWidth={debouncedContentWidth}
        columnGap={debouncedColumnGap}
        title={title}
        contentDetailsLs={contentDetailsLs}
        prevIcon={prevIcon}
        nextIcon={nextIcon}
      />
    </Box>
  );
};

export default Template5;
