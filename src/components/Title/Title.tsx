import { Box } from "@mui/material";
import React from "react";

interface TitleProps {
  text: string;
  width: number;
}

const Title: React.FC<TitleProps> = ({ text, width }) => {
  return (
    <Box
      sx={{
        width: `${width}px`,
        marginInline: "auto",
        fontSize: "48px",
        fontWeight: "bold",
        lineHeight: "1.3",
        textAlign: "center",
      }}
    >
      {text}
    </Box>
  );
};

export default Title;
