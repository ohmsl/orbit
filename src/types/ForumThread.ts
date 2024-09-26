import type { StoredObjectType } from "./StoredObject";

export type ForumThreadType = {
  title: string;
  content: string;
  likes: number;
  comments: number;
  tags: string[];
};

export type StoredForumThreadType = StoredObjectType & {
  title: string;
  content: string;
  category_id: string;
};
