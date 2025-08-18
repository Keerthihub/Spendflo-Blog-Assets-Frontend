import React, { useRef } from "react";
import { Template2RenderProps } from "./Template2Render.types";
import { Box, Button } from "@mui/material";
import Title from "../Title/Title";
import Template2Card from "./Template2Card";
import Template1bg from "../../assets/image/template1-bg.jpg";
import { useDownloadPNGRef } from "../../hooks/useDownloadPNGRef";

const Template2Render: React.FC<Template2RenderProps> = ({
  titleWidth,
  iconSize,
  colCount,
  designHeight,
  contentWidth,
  columnGap,
  rowGap,
  prevIcon,
  nextIcon,
  title = "",
  contentDetailsLs = [],
}) => {
  const exportRef = useRef<HTMLDivElement>(null);

  const contentLength = contentDetailsLs.length;

  const columns = colCount;
  const rows = Math.ceil(contentLength / columns);

  const downloadPNG = useDownloadPNGRef("infographic.png");

  return (
    <>
      <Box sx={{ py: 2 }}>
        <Button
          variant="contained"
          onClick={() => downloadPNG(exportRef.current)}
        >
          Download
        </Button>
      </Box>
      <Box
        sx={{
          width: "1600px",
          height: "900px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          backgroundImage: `url(${Template1bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid #ccc",
          py: 6,
        }}
        ref={exportRef}
      >
        <Title text={title} width={titleWidth} />
        <Box
          sx={{
            width: "fit-content",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: `repeat(${columns},max-content)`,
            gridTemplateRows: `repeat(${rows},${designHeight}px)`,
            gridRowGap: rowGap,
            gridColumnGap: columnGap,
          }}
        >
          {contentDetailsLs.map((contentDetails, _idx) => (
            <Template2Card
              index={_idx}
              contentDetails={contentDetails}
              designHeight={designHeight}
              iconSize={iconSize}
              contentWidth={contentWidth}
              prevIcon={prevIcon.bind(null, _idx)}
              nextIcon={nextIcon.bind(null, _idx)}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Template2Render;
