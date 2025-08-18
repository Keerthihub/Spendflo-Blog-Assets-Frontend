import React, { useState } from "react";
import { Template3CardProps } from "./Template3Card.types";
import { Box } from "@mui/material";
import { getRandomColor } from "../../utils/genral";
import { ArrowBendUpLeft, ArrowBendUpRight } from "phosphor-react";
import Icon from "../Icon";

const Template4Card: React.FC<Template3CardProps> = ({
  index,
  contentDetails,
  iconSize,
  prevIcon,
  nextIcon,
}) => {
  const { sentence: content, icon, color = getRandomColor() } = contentDetails;

  const [show, setShow] = useState<boolean>(false);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        width: "100%",
        px: 3,
        py: 2,
        border: `4px solid ${color}`,
        borderRadius: 4,
        // borderColor: color,
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
          overflow: "visible",
          fontSize: "24px",
          lineHeight: "1.4",
          textAlign: "center",
        }}
      >
        {content}
      </Box>
      <Box>
        <Icon iconName={icon} iconSize={iconSize} color="black" />
      </Box>
    </Box>
  );
};

export default Template4Card;
