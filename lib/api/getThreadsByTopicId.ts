export default async function getThreadsFromTopicId(topic_id: string) {
  const endpoint = ` https://skimm2poc.dev-theskimm.com/threads/topic/${topic_id}`;
  const response = await fetch(endpoint);

  if (response.ok === false) {
    const errorData = await response.json();
    console.log({ errorData });
    throw new Error("ut oh");
  }

  return (await response.json()) as Array<ThreadWithUserType>;
}
