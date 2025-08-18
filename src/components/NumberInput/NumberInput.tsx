import { TextField } from "@mui/material";
import React from "react";
import { NumberInputProps } from "./NumberInput.types";

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  value,
  onChange,
  step = 1,
}) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      type="number"
      size="small"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      slotProps={{
        input: {
          inputProps: {
            step: step,
            min: 0,
          },
        },
      }}
    />
  );
};

export default NumberInput;
