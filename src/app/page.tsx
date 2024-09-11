import ForumCategories from "@/components/Forum/ForumCategories/ForumCategories";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h3" gutterBottom>
        Orbit
      </Typography>
      <ForumCategories />
    </Container>
  );
}
