import type { ForumThreadType } from "@/types/ForumThread";
import CommentIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import FavouriteIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShareIcon from "@mui/icons-material/ShareRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

type ForumThreadProps = {
  thread: ForumThreadType;
};

const ForumThread = ({ thread }: ForumThreadProps) => {
  const formattedDate = new Date(thread.created_at).toLocaleDateString();

  return (
    <Box
      sx={{
        p: 2,
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center">
          <Avatar aria-label="author" sx={{ width: 42, height: 42 }}>
            OS
          </Avatar>
          <Typography variant="body1" sx={{ ml: 1 }}>
            Ollie Slater •{" "}
            <Typography component="span" color="text.primary">
              {formattedDate}
            </Typography>
          </Typography>
        </Stack>
        <IconButton aria-label="more options">
          <MoreVertIcon />
        </IconButton>
      </Stack>

      <Stack spacing={2} sx={{ mt: 1 }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {thread.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Category: ${thread.category_id}`}
          </Typography>
        </Box>

        <Typography variant="body1" color="text.primary">
          {thread.content}
        </Typography>

        {thread.image && (
          <Image
            src={thread.image}
            alt="Thread content"
            width={200}
            height={200}
          />
        )}

        <Stack direction="row" spacing={1}>
          {thread.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" variant="outlined" />
          ))}
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mt: 2 }}
        >
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="like" sx={{ borderRadius: 2 }}>
              <FavouriteIcon />
              <Typography variant="body2" sx={{ ml: 0.5 }}>
                {thread.likes}
              </Typography>
            </IconButton>
            <IconButton aria-label="comment" sx={{ borderRadius: 2 }}>
              <CommentIcon />
              <Typography variant="body2" sx={{ ml: 0.5 }}>
                {thread.comments}
              </Typography>
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ForumThread;
