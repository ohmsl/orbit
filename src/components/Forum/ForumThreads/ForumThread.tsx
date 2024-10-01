import type {
  ForumThreadType,
  StoredForumThreadType,
} from "@/types/ForumThread";
import ChevronRightIcon from "@mui/icons-material/ChevronRightRounded";
import CommentIcon from "@mui/icons-material/CommentRounded";
import FavoriteIcon from "@mui/icons-material/FavoriteRounded";
import MoreIcon from "@mui/icons-material/MoreVertRounded";
import { Box, Button, CardActionArea, ListItem } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

type ForumThreadProps = {
  thread: StoredForumThreadType & ForumThreadType;
};

const ForumThread = ({ thread }: ForumThreadProps) => {
  const formattedDate = new Date(thread.created_at).toLocaleDateString();

  return (
    <ListItem
      sx={{
        display: "block",
      }}
      disableGutters
      divider
    >
      <CardActionArea LinkComponent={Link} href={`/t/${thread.id}`}>
        <CardHeader
          avatar={<Avatar aria-label="author">OS</Avatar>}
          title={<Typography variant="h6">{thread.title}</Typography>}
          subheader={
            <Typography variant="body2" color="text.secondary">
              {`${formattedDate} • Category: ${thread.category_id}`}
            </Typography>
          }
          action={
            <IconButton
              aria-label="more"
              onTouchStart={(event) => event.stopPropagation()}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <MoreIcon />
            </IconButton>
          }
        />
        <CardContent sx={{ py: 0 }}>
          <Typography variant="body1" color="text.primary">
            {thread.content}
          </Typography>
          <Stack direction="row" spacing={1} mt={2}>
            {thread.tags.map((tag) => (
              <Chip key={tag} label={tag} variant="outlined" size="small" />
            ))}
          </Stack>
        </CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
          <Stack
            direction="row"
            spacing={1}
            onTouchStart={(event) => event.stopPropagation()}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <Button
              startIcon={<FavoriteIcon color="action" />}
              aria-label="like"
              size="large"
              color="inherit"
            >
              <Typography variant="body2">{thread.likes}</Typography>
            </Button>
            <Button
              startIcon={<CommentIcon color="action" />}
              aria-label="comment"
              size="large"
              color="inherit"
            >
              <Typography variant="body2">{thread.comments}</Typography>
            </Button>
          </Stack>
          <ChevronRightIcon sx={{ m: 1 }} />
        </Box>
      </CardActionArea>
    </ListItem>
  );
};

export default ForumThread;
