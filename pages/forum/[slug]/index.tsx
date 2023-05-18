import api from "~/lib/api";
import Link from "next/link";
import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";

type ForumPageProps = InferGetStaticPropsType<typeof getStaticProps>;

function ForumPage({ forum, threads }: ForumPageProps) {
  return (
    <main className="my-64 flex flex-col gap-32 px-64">
      <h1 className="font-domaine text-32/38 font-medium">{forum.title}</h1>

      <pre>{JSON.stringify(forum, null, 2)}</pre>

      <pre>{JSON.stringify(threads, null, 2)}</pre>

      <ul>
        {threads.map((thread, index) => {
          return (
            <Link key={thread.thread_id} href={`/`}>
              <li>{thread.title}</li>
            </Link>
          );
        })}
      </ul>
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
  context: GetStaticPropsContext<{ slug: string }>
) {
  const { slug } = context.params!;
  const forum = await api.getForumBySlug(slug);
  const threads = await api.getThreadsFromForumId(forum.forum_id);

  return {
    props: { forum, threads },
  };
}
