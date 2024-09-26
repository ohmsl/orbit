"use client";
import { ForumCategoryType } from "@/types/ForumCategory";
import ChevronRightIcon from "@mui/icons-material/ChevronRightRounded";
import {
  Box,
  CardActionArea,
  CardHeader,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { CategoryCard } from "./CategoryCard";

const ForumCategory = ({ category }: { category: ForumCategoryType }) => {
  const router = useRouter();

  return (
    <CategoryCard>
      <CardActionArea onClick={() => router.push(`/c/${category.id}`)}>
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

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Chip label="Tag 1" size="small" />
              <Chip label="Tag 2" size="small" />
              <Chip label="Tag 3" size="small" />
            </Stack>
            <ChevronRightIcon fontSize="small" color="action" />
          </Box>
        </Box>
      </CardActionArea>
    </CategoryCard>
  );
};

export default ForumCategory;
