export default async function getAllTopics() {
  const endpoint =
    "https://a3bwidvc61.execute-api.us-east-1.amazonaws.com/development/topics";
  const response = await fetch(endpoint).then((response) => response.json());

  return response as Array<TopicType>;
}
