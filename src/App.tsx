import { useEffect, useState } from "react";

import "./App.css";
import {
  Box,
  Button,
  ButtonGroup,
  CssBaseline,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { getRandomColor } from "./utils/genral";
import { IContentMatchedIconLs, matchLogos } from "./api/matchLogos";
import { phosphorIcons } from "./constants/phosphorIcons";
import { IconName } from "./components/Icon/Icon.types";
import { ICompleteContentDetails, IContentDetails } from "./types/interfaces";
import Template1 from "./components/Template1/Template1";
import Template4 from "./components/Template4/Template4";
import Template3 from "./components/Template3/Template3";
import Template2 from "./components/Template2/Template2";
import Template5 from "./components/Template5/Template5";
import theme from "./theme";
import ExcelUploadTextField from "./components/ExcelUpload";
import { Loader } from "./components/Loader";

type Article = {
  title: string;
  content: string[];
};

function App() {
  const [excelData, setExcelData] = useState<Article[]>([]);
  const [data, setData] = useState<Article>({
    title: "",
    content: [],
  });

  const [selectedRow, setSelectedRow] = useState(0);

  const title = data.title;
  const content = data.content;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [contentDetails, setContentDetails] = useState<IContentDetails[]>([]);

  const [completeContentDetails, setCompleteContentDetails] = useState<
    ICompleteContentDetails[]
  >([]);

  const [selectedTemplate, setSelectedTemplate] = useState<Number>(1);

  const onTemplateSelect = (templateNo: number) => {
    setSelectedTemplate(templateNo);
  };

  const onUpdateIcon = (contentPos: number, newIconPos: number) => {
    if (contentPos < 0 || contentPos >= contentDetails.length) return;

    setCompleteContentDetails((prevDetails) =>
      prevDetails.map((item, index) => {
        if (index === contentPos) {
          return {
            ...item,
            iconPos: newIconPos,
          };
        }
        return item;
      })
    );
  };

  const getCurrentIconPos = (contentPos: number): number => {
    if (contentPos < 0 || contentPos >= completeContentDetails.length) return 0;
    return completeContentDetails[contentPos].iconPos;
  };
  const getContentIconCount = (contentPos: number): number => {
    if (contentPos < 0 || contentPos >= completeContentDetails.length) return 0;
    return completeContentDetails[contentPos].iconLs.length;
  };

  const nextIcon = (contentPos: number) => {
    const currentIconPos = getCurrentIconPos(contentPos);
    const iconCount = getContentIconCount(contentPos);

    const newIconPos = (currentIconPos + 1) % iconCount;
    onUpdateIcon(contentPos, newIconPos);
  };
  const prevIcon = (contentPos: number) => {
    const currentIconPos = getCurrentIconPos(contentPos);
    const iconCount = getContentIconCount(contentPos);

    const newIconPos = (currentIconPos - 1 + iconCount) % iconCount;
    onUpdateIcon(contentPos, newIconPos);
  };

  const shuffleColor = () => {
    setCompleteContentDetails((prevDetails) =>
      prevDetails.map((item, index) => {
        return {
          ...item,
          color: getRandomColor(),
        };
      })
    );
  };

  useEffect(() => {
    if (content.length === 0) return;

    const fetchLogos = async () => {
      setIsLoading(true);
      const contentWithIcon = await matchLogos(content, phosphorIcons);
      const _completeContentDetails: ICompleteContentDetails[] =
        contentWithIcon.map((item) => ({
          sentence: item.sentence,
          color: getRandomColor(),
          iconPos: 0,
          iconLs: item.icon_ls,
        }));

      setCompleteContentDetails(_completeContentDetails);

      setIsLoading(false);
    };

    setContentDetails([]);
    fetchLogos();
  }, [content]);

  useEffect(() => {
    if (completeContentDetails.length === 0) return;

    const res = completeContentDetails.map((item, index) => ({
      sentence: item.sentence,
      icon: item.iconLs[item.iconPos],
      color: item.color,
    }));
    setContentDetails(res);
  }, [completeContentDetails]);

  useEffect(() => {
    if (excelData.length === 0) return;
    if (selectedRow === 0) return;
    if (selectedRow > excelData.length) return;

    setData(excelData[selectedRow - 1]);
  }, [excelData, selectedRow]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: 2,
          p: 2,
        }}
      >
        <CssBaseline />
        <ExcelUploadTextField
          onData={(_data) => {
            setExcelData(_data);
            setSelectedRow(1);
          }}
        />
        {excelData.length !== 0 && (
          <>
            <Box>
              <TextField
                label="Selected Row"
                variant="outlined"
                type="number"
                size="small"
                value={selectedRow}
                onChange={(e) => setSelectedRow(Number(e.target.value))}
              />
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <ButtonGroup variant="outlined">
                <Button onClick={onTemplateSelect.bind(null, 1)}>
                  Template 1
                </Button>
                <Button onClick={onTemplateSelect.bind(null, 2)}>
                  Template 2
                </Button>
                <Button onClick={onTemplateSelect.bind(null, 3)}>
                  Template 3
                </Button>
                <Button onClick={onTemplateSelect.bind(null, 4)}>
                  Template 4
                </Button>
                <Button onClick={onTemplateSelect.bind(null, 5)}>
                  Template 5
                </Button>
              </ButtonGroup>
              <Button variant="contained" onClick={shuffleColor}>
                CHG Color
              </Button>
            </Box>

            <Typography variant="h6" sx={{ px: 2 }}>
              Template : {selectedTemplate.toString()}
            </Typography>
            {isLoading && (
              <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
                <Loader />
              </Box>
            )}

            {!isLoading && selectedTemplate === 1 && (
              <Template1
                title={title}
                contentDetailsLs={contentDetails}
                prevIcon={prevIcon}
                nextIcon={nextIcon}
              />
            )}
            {!isLoading && selectedTemplate === 2 && (
              <Template2
                title={title}
                contentDetailsLs={contentDetails}
                prevIcon={prevIcon}
                nextIcon={nextIcon}
              />
            )}
            {!isLoading && selectedTemplate === 3 && (
              <Template3
                title={title}
                contentDetailsLs={contentDetails}
                prevIcon={prevIcon}
                nextIcon={nextIcon}
              />
            )}
            {!isLoading && selectedTemplate === 4 && (
              <Template4
                title={title}
                contentDetailsLs={contentDetails}
                prevIcon={prevIcon}
                nextIcon={nextIcon}
              />
            )}
            {!isLoading && selectedTemplate === 5 && (
              <Template5
                title={title}
                contentDetailsLs={contentDetails}
                prevIcon={prevIcon}
                nextIcon={nextIcon}
              />
            )}
          </>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
