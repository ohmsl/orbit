import type { StoredObjectType } from "./StoredObject";

export type PostType = StoredObjectType & {
  thread_id: string;
  content: string;
  liked_by: Array<string>;
};
