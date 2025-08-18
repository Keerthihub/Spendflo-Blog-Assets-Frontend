import React, { useRef } from "react";
import { Template5RenderProps } from "./Template5Render.types";
import { Box, Button } from "@mui/material";
import Title from "../Title/Title";
import Template5Card from "./Template5Card";
import Template1bg from "../../assets/image/template1-bg.jpg";
import { useDownloadPNGRef } from "../../hooks/useDownloadPNGRef";

const Template5Render: React.FC<Template5RenderProps> = ({
  titleWidth,
  iconSize,
  height,
  boxHeight,
  contentWidth,
  columnGap,
  prevIcon,
  nextIcon,
  title = "",
  contentDetailsLs = [],
}) => {
  const exportRef = useRef<HTMLDivElement>(null);

  const contentLength = contentDetailsLs.length;

  const columns = contentLength;

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
            gridTemplateColumns: `repeat(${columns},min-content)`,
            gridTemplateRows: `repeat(1,1fr)`,
            gridColumnGap: columnGap,
          }}
        >
          {contentDetailsLs.map((contentDetails, _idx) => (
            <Template5Card
              index={_idx}
              contentDetails={contentDetails}
              iconSize={iconSize}
              height={height}
              boxHeight={boxHeight}
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

export default Template5Render;
