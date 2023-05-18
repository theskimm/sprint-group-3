import api from "~/lib/api";
import Link from "next/link";
import Image from "next/image";
import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";

type ThreadPageProps = InferGetStaticPropsType<typeof getStaticProps>;

function ThreadPage({ messages, thread }: ThreadPageProps) {
  return (
    <main className="my-64 flex flex-col gap-32 px-64">
      <h1 className="font-domaine text-32/38 font-medium">{thread.title}</h1>

      <div className="flex w-full max-w-[1100px] flex-col gap-32 py-12">
        <ul className="flex flex-col gap-16">
          {messages.map((message) => (
            <li key={message.message_id}>
              <div
                className={
                  "relative flex flex-col gap-24 rounded border border-gray-600 p-32 font-gt-america " +
                  (message.message_reply_id ? "ml-32" : "")
                }
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-16">
                    <div className="relative aspect-square w-[44px] rounded-full bg-gray-300">
                      <Image
                        src={message.user.photo_url}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-8 text-16/16 text-gray-700">
                      <span>{message.user.name}</span>
                      <span className="text-gray-500">|</span>
                      <span>{message.user.title}</span>
                    </div>
                  </div>

                  <button className="rounded-sm border bg-[#DBFF76] px-8 py-2 font-sangbleu text-12">
                    Join
                  </button>
                </div>
                <p className="">{message.message_text}</p>

                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-16">
                    <span className="font-gt-america-mono text-12/12 uppercase text-gray-600 underline underline-offset-2">
                      Getting a Raise
                    </span>
                    <span className="font-gt-america-mono text-12/12 uppercase text-gray-600 underline underline-offset-2">
                      Leadership
                    </span>
                  </div>

                  <div className="flex items-center gap-16">
                    <span className="font-gt-america-mono text-12/12 uppercase text-gray-600">
                      150 hearts
                    </span>
                    <span className="font-gt-america-mono text-12/12 uppercase text-gray-600">
                      2k comments
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex w-full max-w-[1100px] flex-col gap-32 py-12">
        <textarea
          id="reply"
          name="reply"
          className="font-graphik h-[144px] w-full resize-none rounded border border-gray-300 p-16 text-14 outline-accent-teal transition-colors duration-300 placeholder:text-gray-500 focus-within:border-accent-teal focus:outline-none disabled:bg-white"
          placeholder="Join the conversation here."
        />
        <button className="rounded-sm border bg-[#DBFF76] px-8 py-2 font-sangbleu text-12">
          Reply
        </button>
      </div>
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
  const thread = await api.getThreadByThreadId(id);

  return {
    props: { messages, thread },
  };
}
