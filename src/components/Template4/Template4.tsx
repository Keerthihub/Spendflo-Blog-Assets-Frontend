import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import Template4Render from "./Template4Render";
import { Template4DesignVarsProps, Template4Props } from "./Template4.types";
import { useDebounce } from "../../hooks/useDebounce";
import NumberInput from "../NumberInput";

const defaultSizes: Template4DesignVarsProps = {
  titleWidth: 1600,
  iconSize: 40,
  height: 100,
  contentWidth: 600,
  centerGap: 50,
  rowGap: 50,
};

const Template4: React.FC<Template4Props> = ({
  title,
  contentDetailsLs,
  prevIcon,
  nextIcon,
}) => {
  const [titleWidth, setTitleWidth] = useState<number>(defaultSizes.titleWidth);
  const [iconSize, setIconSize] = useState(defaultSizes.iconSize);
  const [height, setHeight] = useState(defaultSizes.height);
  const [contentWidth, setContentWidth] = useState(defaultSizes.contentWidth);
  const [centerGap, setCenterGap] = useState(defaultSizes.centerGap);
  const [rowGap, setRowGap] = useState(defaultSizes.rowGap);

  const debouncedTitleWidth = useDebounce(titleWidth, 50);
  const debouncedIconSize = useDebounce(iconSize, 50);
  const debouncedHeight = useDebounce(height, 50);
  const debouncedContentWidth = useDebounce(contentWidth, 50);
  const debouncedCenterGap = useDebounce(centerGap, 50);
  const debouncedRowGap = useDebounce(rowGap, 50);

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
          label="Content Width"
          value={contentWidth}
          onChange={(value) => setContentWidth(value)}
          step={5}
        />

        <NumberInput
          label="Center Gap"
          value={centerGap}
          onChange={(value) => setCenterGap(value)}
          step={3}
        />

        <NumberInput
          label="Row Gap"
          value={rowGap}
          onChange={(value) => setRowGap(value)}
          step={3}
        />
      </Box>
      <Template4Render
        titleWidth={debouncedTitleWidth}
        iconSize={debouncedIconSize}
        height={debouncedHeight}
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

export default Template4;
