import type { ForumThreadType } from "@/types/ForumThread";
import TopIcon from "@mui/icons-material/ArrowUpwardRounded";
import LikeIcon from "@mui/icons-material/FavoriteRounded";
import NewIcon from "@mui/icons-material/NewReleasesRounded";
import HotIcon from "@mui/icons-material/WhatshotRounded";
import { Box, Paper, Stack, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import FilterChip from "./FilterChip";
import ForumThread from "./ForumThread";

const data: Array<ForumThreadType> = [
  {
    title: "What's your go-to comfort food?",
    content:
      "Mine has to be a big bowl of mac and cheese. It's just so satisfying!",
    likes: 34,
    comments: 12,
    tags: ["food", "comfort", "discussion"],
  },
  {
    title: "The best movie you've seen this year?",
    content:
      "I just watched 'Oppenheimer' and it blew me away. The visuals, the acting, everything was top-notch. What about you?",
    likes: 56,
    comments: 27,
    tags: ["movies", "recommendations", "discussion"],
  },
  {
    title: "How do you manage stress?",
    content:
      "Work's been really hectic lately, and I feel overwhelmed. How do you all cope with stress and stay balanced?",
    likes: 22,
    comments: 15,
    tags: ["mental health", "wellbeing", "discussion"],
  },
  {
    title: "Favorite hobbies during the weekend?",
    content:
      "I love hiking and getting out into nature. It's the perfect way to unwind after a busy week. What are your weekend hobbies?",
    likes: 45,
    comments: 19,
    tags: ["hobbies", "weekend", "outdoors"],
  },
  {
    title: "Funniest meme you've seen recently?",
    content:
      "I saw this one where a cat looks like it's about to drop a sick beat, and I couldn't stop laughing. Share your best memes!",
    likes: 61,
    comments: 31,
    tags: ["memes", "humor", "fun"],
  },
  {
    title: "Is anyone else excited for the weekend?",
    content:
      "It's been a long week, and I'm really looking forward to some downtime. What are your plans?",
    likes: 18,
    comments: 8,
    tags: ["weekend", "plans", "discussion"],
  },
  {
    title: "Best life hack you've discovered?",
    content:
      "I recently started using a binder clip to organize my cables, and it's been a game-changer! What life hacks do you swear by?",
    likes: 39,
    comments: 22,
    tags: ["life hacks", "tips", "discussion"],
  },
];

type FilterBy = "hot" | "top" | "new" | "likes";

const ForumThreads = () => {
  const [threads, setThreads] = useState(data);
  const [filterBy, setFilterBy] = useState<FilterBy>("hot");

  return (
    <Box>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h5">Threads</Typography>
        <Stack direction="row" spacing={1}>
          <FilterChip
            label="Hot"
            icon={<HotIcon />}
            onClick={() => setFilterBy("hot")}
            selected={filterBy === "hot"}
          />
          <FilterChip
            label="Top"
            icon={<TopIcon />}
            onClick={() => setFilterBy("top")}
            selected={filterBy === "top"}
          />
          <FilterChip
            label="New"
            icon={<NewIcon />}
            onClick={() => setFilterBy("new")}
            selected={filterBy === "new"}
          />
          <FilterChip
            label="Likes"
            icon={<LikeIcon />}
            onClick={() => setFilterBy("likes")}
            selected={filterBy === "likes"}
          />
        </Stack>
      </Toolbar>

      <Paper>
        {threads.map((thread) => (
          <ForumThread key={thread.title} thread={thread} />
        ))}
      </Paper>
    </Box>
  );
};

export default ForumThreads;
