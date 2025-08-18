import React from "react";
import * as XLSX from "xlsx";
import { styled } from "@mui/material/styles";

import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface ExcelUploadProps {
  onData: (data: any[]) => void;
}
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function ExcelUploadTextField({ onData }: ExcelUploadProps) {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    function transformExcelList(rows: string[][]) {
      return rows.map((row) => ({
        title: row[0],
        content: row.slice(1).filter((item) => item.trim() != ""),
      }));
    }
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryStr = e.target?.result;
      if (!binaryStr) return;

      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const allRows = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
        defval: "",
      });

      const dataRows = allRows.slice(1) as string[][];
      const processedDataRows = transformExcelList(dataRows);

      onData(processedDataRows);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload files
      <VisuallyHiddenInput type="file" onChange={handleFileUpload} />
    </Button>
  );
}
