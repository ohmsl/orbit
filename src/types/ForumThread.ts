import type { StoredObjectType } from "./StoredObject";

export type ForumThreadType = {
  title: string;
  content: string;
  likes: number;
  comments: number;
  tags: string[];
  image?: string; // TODO: Working on an image on a thread.
};

export type StoredForumThreadType = StoredObjectType & {
  title: string;
  content: string;
  category_id: string;
};
