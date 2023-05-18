export default async function getMarkdownFromContentId(content_id: string) {
  const endpoint = `https://a3bwidvc61.execute-api.us-east-1.amazonaws.com/development/content/${content_id}`;
  const response = await fetch(endpoint).then((response) => response.json());

  return response as MarkdownType;
}
