import api from "~/lib/api";
import Link from "next/link";
import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";

type ForumPageProps = InferGetStaticPropsType<typeof getStaticProps>;

function ForumPage({ slug, id }: ForumPageProps) {
  return (
    <main className="my-64 flex flex-col gap-32 px-64">
      <h1 className="font-domaine text-32/38 font-medium">Thread title</h1>

      <pre>{JSON.stringify({ slug, id }, null, 2)}</pre>
    </main>
  );
}

export default ForumPage;

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ slug: string; id: string }>
) {
  const { slug, id } = context.params!;
  // const thread = await api.getThreadFromSlug(slug);

  // const threads = await api.getMessagesFromThreadId(forum.forum_id);

  return {
    props: { slug, id },
  };
}
