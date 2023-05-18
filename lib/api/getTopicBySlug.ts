export default async function getTopicBySlug(slug: string) {
  const endpoint = `https://a3bwidvc61.execute-api.us-east-1.amazonaws.com/development/topic/${slug}`;
  const response = await fetch(endpoint).then((response) => response.json());

  return response as TopicType;
}
