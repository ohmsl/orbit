import { Container } from "@mui/material";
import Navbar from "./Navbar/Navbar";

const View = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxWidth="xl">
      <Navbar />
      {children}
    </Container>
  );
};

export default View;
