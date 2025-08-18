import React, { useState } from "react";
import { Template4CardProps } from "./Template4Card.types";
import { Box } from "@mui/material";
import { getRandomColor } from "../../utils/genral";
import { ArrowBendUpLeft, ArrowBendUpRight } from "phosphor-react";
import Icon from "../Icon";

const Template4Card: React.FC<Template4CardProps> = ({
  index,
  contentDetails,
  height,
  contentWidth,
  iconSize,
  prevIcon,
  nextIcon,
}) => {
  const { sentence: content, icon, color = getRandomColor() } = contentDetails;

  const [show, setShow] = useState<boolean>(false);

  return (
    <Box sx={{ display: "flex", height: `${height}px` }}>
      <Box
        sx={{ position: "relative", height: "inherit" }}
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
            width: `${1.5 * height}px`,
            height: "inherit",
            bgcolor: color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            clipPath:
              "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
          }}
        >
          <Box sx={{ pl: `${height * 0.2}px` }}>
            <Icon iconName={icon} iconSize={iconSize} color="black" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: `${contentWidth}px`,
          height: "inherit",
          // bgcolor: "#fff",
          padding: "10px 30px",
          overflow: "visible",
          fontSize: "24px",
          lineHeight: "1.4",
        }}
      >
        {content}
      </Box>
    </Box>
  );
};

export default Template4Card;
