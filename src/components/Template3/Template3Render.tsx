import React, { useRef } from "react";
import { Template3RenderProps } from "./Template3Render.types";
import { Box, Button } from "@mui/material";
import Title from "../Title/Title";
import Template3Card from "./Template3Card";
import Template1bg from "../../assets/image/template1-bg.jpg";
import { useDownloadPNGRef } from "../../hooks/useDownloadPNGRef";

const Template4Render: React.FC<Template3RenderProps> = ({
  titleWidth,
  iconSize,
  boxHeight,
  boxWidth,
  gap,
  prevIcon,
  nextIcon,
  title = "",
  contentDetailsLs = [],
}) => {
  const exportRef = useRef<HTMLDivElement>(null);

  const contentLength = contentDetailsLs.length;

  const columns = contentLength;
  const rows = 1;

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
        }}
        ref={exportRef}
      >
        <Title text={title} width={titleWidth} />
        <Box
          sx={{
            width: "fit-content",
            margin: "0 auto",
            display: "grid",
            marginTop: -10,
            gridTemplateColumns: `repeat(${columns},${boxWidth}px)`,
            gridTemplateRows: `repeat(${rows},${boxHeight}px)`,
            gridColumnGap: gap,
          }}
        >
          {contentDetailsLs.map((contentDetails, _idx) => (
            <Template3Card
              index={_idx}
              contentDetails={contentDetails}
              iconSize={iconSize}
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
