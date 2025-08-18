import React, { useState } from "react";
import { Template1CardProps } from "./Template1Card.types";
import { Box } from "@mui/material";
import { getRandomColor } from "../../utils/genral";
import { ArrowBendUpLeft, ArrowBendUpRight } from "phosphor-react";
import Icon from "../Icon";

const Template1Card: React.FC<Template1CardProps> = ({
  index,
  contentDetails,
  squareSize,
  contentWidth,
  iconSize,
  prevIcon,
  nextIcon,
}) => {
  const { sentence: content, icon, color = getRandomColor() } = contentDetails;

  const [show, setShow] = useState<boolean>(false);

  return (
    <Box sx={{ display: "flex", height: `${squareSize}px` }}>
      <Box
        sx={{
          position: "relative",
          width: `${squareSize}px`,
          height: "inherit",
          bgcolor: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <Icon iconName={icon} iconSize={iconSize} color="black" />
        {show && (
          <>
            <Box
              sx={{
                position: "absolute",
                top: "0",
                left: "0",
                cursor: "pointer",
                transform: "translate(-30%, -30%)",
              }}
              onClick={prevIcon}
            >
              <ArrowBendUpLeft size={20} />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "0",
                right: "0",
                cursor: "pointer",
                transform: "translate(30%, -30%)",
              }}
              onClick={nextIcon}
            >
              <ArrowBendUpRight size={20} />
            </Box>
          </>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: `${contentWidth}px`,
          height: "inherit",
          bgcolor: "#fff",
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
          width: 10,
          bgcolor: color,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}
      ></Box>
    </Box>
  );
};

export default Template1Card;
