export default async function getThreadByThreadId(thread_id: string) {
  const endpoint = `https://a3bwidvc61.execute-api.us-east-1.amazonaws.com/development/thread/${thread_id}`;
  const response = await fetch(endpoint);

  if (response.ok === false) {
    const errorData = await response.json();
    console.log({ errorData });
    throw new Error("ut oh");
  }

  return (await response.json()) as ThreadType;
}
