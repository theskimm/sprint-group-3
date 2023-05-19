import Link from "next/link";
import Image from "next/image";
import api from "~/lib/api";
import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";

type TopicPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const experts = [
  {
    id: 1,
    name: "Tonya Rapley",
    photo: "/../public/images/experts/expert-1.png",
    description: "Author, entrepreneur, and owner of Club Loofah",
    participants: "500 participants",
    joined: true,
  },
  {
    id: 2,
    name: "Tonya Rapley",
    photo: "/../public/images/experts/expert-2.png",
    description: "Author, entrepreneur, and owner of Club Loofah",
    participants: "500 participants",
    joined: false,
  },
  {
    id: 3,
    name: "Tonya Rapley",
    photo: "/../public/images/experts/expert-3.png",
    description: "Author, entrepreneur, and owner of Club Loofah",
    participants: "500 participants",
    joined: false,
  },
];

// const asdf = [
//   {
//     id: 1,
//     name: "Claire V.",
//     text: "Here is where the question or subject of the forum will be. Here is where the question or subject of the forum will be. Here is where the question or subject of the forum will be.",
//   },
//   {
//     id: 2,
//     name: "Claire V.",
//     text: "Here is where the question or subject of the forum will be. Here is where the question or subject of the forum will be. Here is where the question or subject of the forum will be.",
//   },
//   {
//     id: 3,
//     name: "Claire V.",
//     text: "Here is where the question or subject of the forum will be. Here is where the question or subject of the forum will be. Here is where the question or subject of the forum will be.",
//   },
//   {
//     id: 4,
//     name: "Claire V.",
//     text: "Here is where the question or subject of the forum will be. Here is where the question or subject of the forum will be. Here is where the question or subject of the forum will be.",
//   },
//   {
//     id: 5,
//     name: "Claire V.",
//     text: "Here is where the question or subject of the forum will be. Here is where the question or subject of the forum will be. Here is where the question or subject of the forum will be.",
//   },
//   {
//     id: 6,
//     name: "Claire V.",
//     text: "Here is where the question or subject of the forum will be. Here is where the question or subject of the forum will be. Here is where the question or subject of the forum will be.",
//   },
// ];

function TopicPage({ topic, subtopics, discussions }: TopicPageProps) {
  return (
    <main className="my-64 flex flex-col items-center justify-center">
      <header className="relative -mt-64 flex flex-col justify-center self-stretch px-[158px] py-[75px]">
        <Image
          src={topic.header_bg_url}
          alt=""
          className="relative object-cover"
          fill
        />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative flex flex-col gap-32 text-white">
          <div>
            <span className="font-gt-america-mono text-20 uppercase">
              {topic.sub_title}
            </span>

            <h1 className="font-sangbleu text-[81px] font-medium leading-[97px]">
              {topic.title}
            </h1>
          </div>

          <ul className="flex items-center gap-20">
            {topic.categories.map((category) => {
              return (
                <li
                  key={category}
                  className="border border-white px-12 py-8 font-gt-america text-14/14 tracking-.02"
                >
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
      </header>

      <div className="flex flex-col items-center gap-48 px-64 py-128">
        <span className="font-sangbleu text-[34px]/[40px] font-light">
          Learn From Our Experts
        </span>

        <div className="flex items-center gap-16">
          {experts.map((expert) => {
            return (
              <div
                key={expert.id}
                className="flex max-w-[354px] flex-col items-center gap-32 rounded border border-[#929B9A] bg-[#F6FAEB] p-32"
              >
                <div className="flex flex-col items-center gap-4">
                  <span className="font-sangbleu text-24">Side Hustles</span>
                  <div className="relative aspect-square w-[220px]">
                    <Image
                      src={expert.photo}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-4">
                  <span className="font-gt-america text-16/16 font-medium">
                    {expert.name}
                  </span>
                  <span className="text-center">{expert.description}</span>
                </div>

                <button
                  className={`w-full border border-[#6100FF] py-12 ${
                    expert.joined ? "bg-[#6100FF] text-white" : ""
                  }`}
                >
                  {expert.joined ? "JOINED" : "JOIN"}
                </button>

                <span className="text-12/12 uppercase">
                  {expert.participants}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-32 self-stretch bg-[#54003D] py-[64px] text-white">
        <span className="font-sangbleu text-[34px] leading-[40px]">
          Related Topics
        </span>

        <ul className="flex gap-16">
          {subtopics.map((subtopic) => {
            return (
              <Link key={subtopic.topic_id} href={`/topic/${subtopic.slug}`}>
                <div className="flex flex-col items-center justify-center gap-16">
                  <div className="relative aspect-square w-[176px]">
                    <Image
                      src={subtopic.header_bg_url}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>

                  <span className="font-gt-america-mono text-[13px] uppercase leading-[13px]">
                    {subtopic.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="flex w-full max-w-[1100px] flex-col gap-32 py-128">
        <span className="font-sangbleu text-[34px] leading-[40px]">
          Join The Conversation
        </span>

        <ul className="flex flex-col gap-16">
          {discussions.map((discussion) => (
            <li key={discussion.thread_id}>
              <Link
                key={discussion.thread_id}
                href={`/thread/${discussion.thread_id}`}
                className=""
              >
                <div className="relative flex flex-col gap-24 rounded border border-gray-600 p-32 font-gt-america">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-16">
                      <div className="relative aspect-square w-[44px] rounded-full bg-gray-300">
                        <Image
                          src={discussion.user.photo_url}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex items-center gap-8 text-16/16 text-gray-700">
                        <span>{discussion.user.name}</span>
                        <span className="text-gray-500">|</span>
                        <span>Coach</span>
                      </div>
                    </div>

                    <button className="rounded-sm border bg-[#DBFF76] px-8 py-2 font-sangbleu text-12">
                      Join
                    </button>
                  </div>

                  <p className="">{discussion.title}</p>

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
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default TopicPage;

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
  const topics = await api.getAllTopics();
  const topic = await api.getTopicBySlug(slug);

  const subtopics = topics.filter((t) => t.parent_topic_id === topic.topic_id);
  const discussions = await api.getThreadsFromTopicId(topic.topic_id);

  return {
    props: { topic, subtopics, discussions },
  };
}
