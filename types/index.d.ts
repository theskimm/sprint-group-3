type TopicType = {
  topic_id: string;
  parent_topic_id: string;
  title: string;
  slug: string;
  topic_status: TopicStatus;
  content_ids: string[];
  created_at: number;
  private_users_ids: string[];
  journey_ids: string[];
  sub_title: string;
  header_bg_url: string;
  categories: string[];
  theme: string;
};

type MarkdownType = {
  text: string;
  user_id: string;
  content_id: string;
  title: string;
  status: ContentStatus;
};

type ForumType = {
  created_at: number;
  forum_id: string;
  slug: string;
  topic_id: string;
  private_users_ids: string[];
  forum_status: TopicStatus;
  parent_forum_id: string;
  title: string;
};

type MessageType = {
  message_id: string;
  topic_id: string;
  forum_id: string;
  message_reply_id: string;
  message_text: string;
  user_id: string;
  status: MessageStatus;
};

type ThreadType = {
  thread_id: string;
  forum_id: string;
  title: string;
  created_at: number;
};

type ThreadWithUserType = {
  thread_id: string;
  forum_id: string;
  title: string;
  created_at: number;
  topic_id: string;
  user: UserType;
};

type UserType = {
  user_id: string;
  name: string;
  ranking: number;
  created_at: number;
  photo_url: string;
  title: string;
};

enum MessageStatus {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  ARCHIVED = "ARCHIVED",
  FLAGGED = "FLAGGED",
  SPAM = "SPAM",
  HIDDEN = "HIDDEN",
  REPORTED = "REPORTED",
}

type TopicStatus = "ACTIVE" | "DELETED" | "ARCHIVED" | "HIDDEN" | "PRIVATE";

type ContentStatus =
  | "ACTIVE"
  | "DELETED"
  | "ARCHIVED"
  | "FLAGGED"
  | "SPAM"
  | "HIDDEN"
  | "REPORTED";
