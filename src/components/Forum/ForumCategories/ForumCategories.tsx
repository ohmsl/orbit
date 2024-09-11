import { ForumCategoryType } from "@/types/ForumCategory";
import { Grid2 as Grid } from "@mui/material";
import ForumCategory from "./ForumCategory";

const testCategories: Array<ForumCategoryType> = [
  {
    id: "1",
    name: "General",
    description: "Main discussion channel for anything Orbit related",
    created_by: "user1",
    media: "https://picsum.photos/500/300",
  },
  {
    id: "2",
    name: "Tech",
    description: "Tech discussions",
    created_by: "user2",
    media: "https://picsum.photos/500",
  },
  {
    id: "3",
    name: "Finance",
    description: "Finance discussions",
    created_by: "user3",
    media: "https://picsum.photos/500/200",
  },
  {
    id: "4",
    name: "Marketing",
    description: "Marketing discussions",
    created_by: "user4",
    media: "https://picsum.photos/500/500",
  },
];

const ForumCategories = () => {
  return (
    <Grid container spacing={2}>
      {testCategories.map((category) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={category.id}>
          <ForumCategory category={category} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ForumCategories;
