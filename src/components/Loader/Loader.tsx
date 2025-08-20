import { Box } from "@mui/material";
import { PacmanLoader } from "react-spinners";
import { ILoaderProps } from "./Loader.types";

const Loader: React.FC<ILoaderProps> = ({ loading = true }) => {
  return (
    <Box>
      <PacmanLoader loading={loading} size={80} color="#f11897" />
    </Box>
  );
};

export default Loader;
