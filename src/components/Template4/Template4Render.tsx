import React, { useRef } from "react";
import { Template4RenderProps } from "./Template4Render.types";
import { Box, Button } from "@mui/material";
import Title from "../Title/Title";
import Template4Card from "./Template4Card";
import Template1bg from "../../assets/image/template1-bg.jpg";
import { useDownloadPNGRef } from "../../hooks/useDownloadPNGRef";

const Template4Render: React.FC<Template4RenderProps> = ({
  titleWidth,
  iconSize,
  height,
  contentWidth,
  centerGap,
  rowGap,
  prevIcon,
  nextIcon,
  title = "",
  contentDetailsLs = [],
}) => {
  const exportRef = useRef<HTMLDivElement>(null);

  const contentLength = contentDetailsLs.length;

  const columns = 2;
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
          // bgcolor: "#eee",

          border: "1px solid #ccc",
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
            gridTemplateRows: `repeat(${rows},1fr)`,
            gridRowGap: rowGap,
            gridColumnGap: centerGap,
          }}
        >
          {contentDetailsLs.map((contentDetails, _idx) => (
            <Template4Card
              index={_idx}
              contentDetails={contentDetails}
              iconSize={iconSize}
              height={height}
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

export default Template4Render;
