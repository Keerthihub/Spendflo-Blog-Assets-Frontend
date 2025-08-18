import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import Template3Render from "./Template3Render";
import { Template3DesignVarsProps, Template3Props } from "./Template3.types";
import { useDebounce } from "../../hooks/useDebounce";
import NumberInput from "../NumberInput";

const defaultSizes: Template3DesignVarsProps = {
  titleWidth: 1600,
  iconSize: 40,
  boxHeight: 300,
  boxWidth: 200,
  gap: 50,
};

const Template3: React.FC<Template3Props> = ({
  title,
  contentDetailsLs,
  prevIcon,
  nextIcon,
}) => {
  const [titleWidth, setTitleWidth] = useState<number>(defaultSizes.titleWidth);
  const [iconSize, setIconSize] = useState(defaultSizes.iconSize);
  const [boxHeight, setBoxHeight] = useState(defaultSizes.boxHeight);
  const [boxWidth, setBoxWidth] = useState(defaultSizes.boxWidth);
  const [gap, setGap] = useState(defaultSizes.gap);

  const debouncedTitleWidth = useDebounce(titleWidth, 50);
  const debouncedIconSize = useDebounce(iconSize, 50);
  const debouncedBoxHeight = useDebounce(boxHeight, 50);
  const debouncedBoxWidth = useDebounce(boxWidth, 50);
  const debouncedGap = useDebounce(gap, 50);

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
          value={boxHeight}
          onChange={(value) => setBoxHeight(value)}
          step={2}
        />
        <NumberInput
          label="Content Width"
          value={boxWidth}
          onChange={(value) => setBoxWidth(value)}
          step={5}
        />

        <NumberInput
          label="Center Gap"
          value={gap}
          onChange={(value) => setGap(value)}
          step={3}
        />
      </Box>
      <Template3Render
        titleWidth={debouncedTitleWidth}
        iconSize={debouncedIconSize}
        boxHeight={debouncedBoxHeight}
        boxWidth={debouncedBoxWidth}
        gap={debouncedGap}
        title={title}
        contentDetailsLs={contentDetailsLs}
        prevIcon={prevIcon}
        nextIcon={nextIcon}
      />
    </Box>
  );
};

export default Template3;
