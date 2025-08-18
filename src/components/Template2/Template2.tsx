import { Box } from "@mui/material";
import React, { useState } from "react";
import Template2Render from "./Template2Render";
import { Template2DesignVarsProps, Template2Props } from "./Template2.types";
import { useDebounce } from "../../hooks/useDebounce";
import NumberInput from "../NumberInput";

const defaultSizes: Template2DesignVarsProps = {
  titleWidth: 1600,
  iconSize: 40,
  colCount: 3,
  designHeight: 100,
  contentWidth: 300,
  columnGap: 50,
  rowGap: 50,
};

const Template2: React.FC<Template2Props> = ({
  title,
  contentDetailsLs,
  prevIcon,
  nextIcon,
}) => {
  const [titleWidth, setTitleWidth] = useState<number>(defaultSizes.titleWidth);
  const [iconSize, setIconSize] = useState(defaultSizes.iconSize);
  const [colCount, setColCount] = useState(defaultSizes.colCount);
  const [designHeight, setDesignHeight] = useState(defaultSizes.designHeight);
  const [contentWidth, setContentWidth] = useState(defaultSizes.contentWidth);
  const [columnGap, setColumnGap] = useState(defaultSizes.columnGap);
  const [rowGap, setRowGap] = useState(defaultSizes.rowGap);

  const debouncedTitleWidth = useDebounce(titleWidth, 50);
  const debouncedIconSize = useDebounce(iconSize, 50);
  const debouncedColCount = useDebounce(colCount, 50);
  const debouncedDesignHeight = useDebounce(designHeight, 50);
  const debouncedContentWidth = useDebounce(contentWidth, 50);
  const debouncedColumnGap = useDebounce(columnGap, 50);
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
          onChange={(value) => setIconSize(value)}
          step={2}
        />
        <NumberInput
          label="Column Count"
          value={colCount}
          onChange={(value) => setColCount(value)}
          step={1}
        />
        <NumberInput
          label="Design Height"
          value={designHeight}
          onChange={(value) => setDesignHeight(value)}
          step={3}
        />
        <NumberInput
          label="Content Width"
          value={contentWidth}
          onChange={(value) => setContentWidth(value)}
          step={3}
        />
        <NumberInput
          label="Column Gap"
          value={columnGap}
          onChange={(value) => setColumnGap(value)}
          step={3}
        />
        <NumberInput
          label="Row Gap"
          value={rowGap}
          onChange={(value) => setRowGap(value)}
          step={3}
        />
      </Box>
      <Template2Render
        titleWidth={debouncedTitleWidth}
        iconSize={debouncedIconSize}
        colCount={debouncedColCount}
        designHeight={debouncedDesignHeight}
        contentWidth={debouncedContentWidth}
        columnGap={debouncedColumnGap}
        rowGap={debouncedRowGap}
        title={title}
        contentDetailsLs={contentDetailsLs}
        prevIcon={prevIcon}
        nextIcon={nextIcon}
      />
    </Box>
  );
};

export default Template2;
