import type { ForumThreadType } from "@/types/ForumThread";
import CommentIcon from "@mui/icons-material/CommentRounded";
import FavoriteIcon from "@mui/icons-material/FavoriteRounded";
import ShareIcon from "@mui/icons-material/ShareRounded";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type ForumThreadProps = {
  thread: ForumThreadType;
};

const ForumThread = ({ thread }: ForumThreadProps) => {
  const formattedDate = new Date(thread.created_at).toLocaleDateString();

  return (
    <Card sx={{ margin: 2, boxShadow: 3 }}>
      <CardHeader
        avatar={<Avatar aria-label="author">OS</Avatar>}
        title={<Typography variant="h6">{thread.title}</Typography>}
        subheader={
          <Typography variant="body2" color="text.secondary">
            {`${formattedDate} • Category: ${thread.category_id}`}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="body1" color="text.primary" paragraph>
          {thread.content}
        </Typography>
        <Stack direction="row" spacing={1}>
          {thread.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <FavoriteIcon color="error" />
          <Typography variant="body2" sx={{ marginLeft: 0.5 }}>
            {thread.likes}
          </Typography>
        </IconButton>
        <IconButton aria-label="comment">
          <CommentIcon color="primary" />
          <Typography variant="body2" sx={{ marginLeft: 0.5 }}>
            {thread.comments}
          </Typography>
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ForumThread;
