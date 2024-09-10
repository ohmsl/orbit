import { Backdrop } from "@mui/material";
import Throbber from "./Throbber";

const LoadingScreen = ({ open }: { open: boolean }) => {
  return (
    <Backdrop open={open}>
      <Throbber />
    </Backdrop>
  );
};

export default LoadingScreen;
