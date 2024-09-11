import { ForumCategoryType } from "@/types/ForumCategory";
import { Box, CardHeader, Chip, Stack, Typography } from "@mui/material";
import { CategoryCard } from "./CategoryCard";

const ForumCategory = ({ category }: { category: ForumCategoryType }) => {
  return (
    <CategoryCard>
      <CardHeader
        title={category.name}
        sx={{ pb: 0 }}
        action={
          <Typography variant="caption" color="textSecondary">
            361 posts
          </Typography>
        }
      />
      <Box display="flex" flexDirection="column" gap={1} p={2} pt={0}>
        <Typography variant="body2" color="text.secondary">
          {category.description}
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Chip label="Tag 1" size="small" />
          <Chip label="Tag 2" size="small" />
          <Chip label="Tag 3" size="small" />
        </Stack>
      </Box>
    </CategoryCard>
  );
};

export default ForumCategory;
