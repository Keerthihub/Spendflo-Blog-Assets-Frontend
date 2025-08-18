import React, { useState } from "react";
import { Template5CardProps } from "./Template5Card.types";
import { Box } from "@mui/material";
import { getRandomColor } from "../../utils/genral";
import { ArrowBendUpLeft, ArrowBendUpRight } from "phosphor-react";
import Icon from "../Icon";
import { darken } from "@mui/material/styles";

const Template5Card: React.FC<Template5CardProps> = ({
  contentDetails,
  height,
  boxHeight,
  contentWidth,
  iconSize,
  prevIcon,
  nextIcon,
}) => {
  const { sentence: content, icon, color = getRandomColor() } = contentDetails;

  const [show, setShow] = useState<boolean>(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "fit-content",
        height: `${height}px`,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          width: `${contentWidth}px`,
          height: "inherit",
          padding: "10px 30px",
          overflow: "visible",
          fontSize: "24px",
          lineHeight: "1.4",
        }}
      >
        {content}
      </Box>
      <Box
        sx={{
          position: "relative",
        }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {show && (
          <>
            <Box
              sx={{
                position: "absolute",
                top: "0",
                left: "0",
                cursor: "pointer",
                transform: "translate(-50%, -50%)",
                zIndex: 10,
              }}
              onClick={prevIcon}
            >
              <ArrowBendUpLeft size={30} />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "0",
                right: "0",
                cursor: "pointer",
                transform: "translate(50%, -50%)",
              }}
              onClick={nextIcon}
            >
              <ArrowBendUpRight size={30} />
            </Box>
          </>
        )}
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "50%",
            width: 5,
            height: `${0.3 * boxHeight}px`,
            bgcolor: "#ccc",
            zIndex: 10,
            transform: "translate(-50%,-50%)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: "50%",
              width: 15,
              height: 15,
              bgcolor: "inherit",
              transform: "translate(-50%,-50%)",
              borderRadius: "50%",
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              width: 15,
              height: 15,
              bgcolor: "inherit",
              transform: "translate(-50%,50%)",
              borderRadius: "50%",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            clipPath: "polygon(20% 0%, 80% 0%, 100% 101%, 0% 101%)",
            width: `${boxHeight}px`,
            height: "auto",
            aspectRatio: 3,
            bgcolor: darken(color, 0.05),
            overflow: "visible",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: `${boxHeight}px`,
            height: `${boxHeight}px`,
            aspectRatio: 1,
            bgcolor: color,
          }}
        >
          <Icon iconName={icon} iconSize={iconSize} color="black" />
        </Box>
      </Box>
    </Box>
  );
};

export default Template5Card;
