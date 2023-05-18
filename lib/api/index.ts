// topics
import getTopicBySlug from "./getTopicBySlug";
import getAllTopics from "./getAllTopics";
// forums
import getForumBySlug from "./getForumBySlug";
import getForumsByTopicId from "./getForumsByTopicId";
import getMarkdownFromContentId from "./getMarkdownByContentId";
import getMessagesFromThreadId from "./getMessagesFromThreadId";
import getThreadsFromForumId from "./getThreadsFromForumId";
import getThreadsFromTopicId from "./getThreadsByTopicId";
import getThreadByThreadId from "./getThreadByThreadId";

const api = {
  getTopicBySlug,
  getAllTopics,
  getForumBySlug,
  getForumsByTopicId,
  getMarkdownFromContentId,
  getMessagesFromThreadId,
  getThreadsFromForumId,
  getThreadsFromTopicId,
  getThreadByThreadId
};

export default api;
