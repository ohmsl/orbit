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
        padding: "16px",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center">
          <Avatar aria-label="author" sx={{ width: 42, height: 42 }}>
            OS
          </Avatar>
          <Typography variant="body1" sx={{ marginLeft: 1 }}>
            Ollie Slater •{" "}
            <span style={{ color: "text.primary" }}>{formattedDate}</span>
          </Typography>
        </Stack>
        <IconButton aria-label="more options">
          <MoreVertIcon />
        </IconButton>
      </Stack>

      <Stack spacing={2} sx={{ marginTop: 1 }}>
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontSize: "1.25rem" }}
          >
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
          sx={{ marginTop: 2 }}
        >
          <Stack direction="row" spacing={1}>
            <IconButton
              aria-label="like"
              sx={{
                borderRadius: "15px",
              }}
            >
              <FavouriteIcon />
              <Typography variant="body2" sx={{ marginLeft: 0.5 }}>
                {thread.likes}
              </Typography>
            </IconButton>
            <IconButton
              aria-label="comment"
              sx={{
                borderRadius: "15px",
              }}
            >
              <CommentIcon />
              <Typography variant="body2" sx={{ marginLeft: 0.5 }}>
                {thread.comments}
              </Typography>
            </IconButton>
            <IconButton aria-label="share" sx={{}}>
              <ShareIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ForumThread;
