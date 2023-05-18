export default async function getForumBySlug(slug: string) {
  const endpoint = `https://a3bwidvc61.execute-api.us-east-1.amazonaws.com/development/forum/${slug}`;
  const response = await fetch(endpoint);

  if (response.ok === false) {
    const errorData = await response.json();

    throw new Error("ut oh");
  }

  return (await response.json()) as ForumType;
}
