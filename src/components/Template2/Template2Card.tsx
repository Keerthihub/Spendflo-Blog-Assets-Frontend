import React, { useState } from "react";
import { Template2CardProps } from "./Template2Card.types";
import { Box } from "@mui/material";
import { getRandomColor } from "../../utils/genral";
import { ArrowBendUpLeft, ArrowBendUpRight } from "phosphor-react";
import Icon from "../Icon";
import DashedCircle from "./DashedCircle";

const Template2Card: React.FC<Template2CardProps> = ({
  iconSize,
  designHeight,
  contentDetails,
  contentWidth,
  prevIcon,
  nextIcon,
}) => {
  const { sentence: content, icon, color = getRandomColor() } = contentDetails;
  const [show, setShow] = useState<boolean>(false);

  return (
    <Box sx={{ display: "flex", height: "100%", gap: 4, alignItems: "center" }}>
      <Box
        sx={{
          position: "relative",
          width: "auto",
          height: "inherit",
          aspectRatio: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <DashedCircle
          width={designHeight}
          height={designHeight}
          strokeWidth={3}
          dash={10}
          gap={10}
          strokeColor={color}
        />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "70%",
              height: "70%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: color,
              borderRadius: "100%",
            }}
          >
            <Box
              sx={{
                width: "80%",
                height: "80%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#fff",
                borderRadius: "100%",
              }}
            >
              <Icon iconName={icon} iconSize={iconSize} color="black" />
            </Box>
          </Box>
        </Box>
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
          width: 6,
          height: "85%",
          bgcolor: color,
          borderRadius: 10,
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: `${contentWidth}px`,
          height: "inherit",
          padding: "10px 30px",
          pl: 0,
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

export default Template2Card;
