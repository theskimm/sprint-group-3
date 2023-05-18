import api from "~/lib/api";
import Link from "next/link";
import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";

type ThreadPageProps = InferGetStaticPropsType<typeof getStaticProps>;

function ThreadPage({}: ThreadPageProps) {
  return (
    <main className="my-64 flex flex-col gap-32 px-64">
      <h1 className="font-domaine text-32/38 font-medium">Thread Title</h1>
    </main>
  );
}

export default ThreadPage;

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>
) {
  const { id } = context.params!;
  const messages = await api.getMessagesFromThreadId(id);

  return {
    props: {},
  };
}
