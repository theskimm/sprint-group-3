import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import api from "~/lib/api";
import type { InferGetStaticPropsType } from "next";
import { useState } from "react";
import Conversation from "~/components/conversation";

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

const options = [
  {
    id: 1,
    text: "Feed",
    isActive: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="21"
        fill="none"
        viewBox="0 0 24 21"
        className="shrink-0"
      >
        <path
          fill="#6100FF"
          stroke="#000"
          d="M21.577 8.13l-1.315-.04-.515-.014V19.747h-4.784v-5.784H8.178v5.784H3.392V8.177H1.5L11.57.626 21.577 8.13z"
        ></path>
      </svg>
    ),
  },
  {
    id: 2,
    text: "Learn",
    isActive: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="29"
        fill="none"
        viewBox="0 0 24 29"
      >
        <path
          fill="#000"
          d="M11.576 2.984a.473.473 0 01-.472-.472V.472a.473.473 0 11.945 0v2.04a.473.473 0 01-.473.472zM6.188 4.43a.47.47 0 01-.41-.238L4.763 2.426a.474.474 0 01.175-.648.472.472 0 01.648.176l1.018 1.764a.474.474 0 01-.415.711zm10.771 0a.478.478 0 01-.414-.711l1.018-1.764a.476.476 0 01.648-.176c.225.13.306.423.175.648L17.37 4.191a.476.476 0 01-.41.238zM2.241 8.372a.511.511 0 01-.239-.063L.238 7.292a.478.478 0 01-.175-.648.478.478 0 01.648-.176l1.764 1.017a.476.476 0 01-.234.887zm18.661 0a.476.476 0 01-.239-.887l1.765-1.017a.476.476 0 01.648.171.476.476 0 01-.17.648L21.14 8.305a.463.463 0 01-.239.063m-6.634 16.217c-.036 0-.068 0-.104-.009l-5.383-1.184s-.023-.004-.036-.009c-.702-.216-.68-.828-.67-1.125v-1.215c-.01-.518-.014-.739-1.315-2.147a7.146 7.146 0 01-2.678-5.672 7.468 7.468 0 013.727-6.45 7.472 7.472 0 017.454 0 7.47 7.47 0 013.726 6.455 7.077 7.077 0 01-2.678 5.667c-1.215 1.319-1.31 1.895-1.31 2.511v.054c0 .446-.188.676-.35.788-.293.207-.622.14-.743.104l-2.773-.644a.476.476 0 01.212-.927l2.7.625c0-.931.261-1.75 1.589-3.186a.54.54 0 01.054-.05 6.125 6.125 0 002.345-4.933 6.53 6.53 0 00-3.254-5.644 6.529 6.529 0 00-6.504 0 6.522 6.522 0 00-3.255 5.635 6.209 6.209 0 002.35 4.947.54.54 0 01.054.05c1.323 1.426 1.575 1.876 1.589 2.812v1.446l5.347 1.174a.476.476 0 01-.104.94m-.067 2.18c-.036 0-.072 0-.103-.014l-5.32-1.207a.471.471 0 01-.356-.567.471.471 0 01.567-.355l5.32 1.206c.257.058.414.31.356.567a.476.476 0 01-.464.37zm-.666 2.025c-.036 0-.068 0-.104-.014l-4.32-.968a.474.474 0 11.206-.927l4.321.968a.474.474 0 01-.103.936"
        ></path>
      </svg>
    ),
  },
  {
    id: 3,
    text: "Experts",
    isActive: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="25"
        fill="none"
        viewBox="0 0 17 25"
      >
        <path
          stroke="#000"
          d="M14.083 4.288l.028.016.03.012 1.767.728a.977.977 0 01.511 1.28l-.726 1.763a1.959 1.959 0 000 1.533l.728 1.768h0l.003.007c.198.462-.03 1.054-.56 1.266h0l-.005.001-1.747.72c-.522.16-.926.59-1.126 1.056h0l-.003.007-.727 1.767a.977.977 0 01-1.279.512l-.002-.001-1.763-.726a1.959 1.959 0 00-1.533 0l-1.767.728h0l-.007.003c-.462.198-1.054-.03-1.266-.56h0l-.002-.005-.72-1.747c-.16-.522-.59-.926-1.056-1.126h0l-.006-.003-1.767-.727a.977.977 0 01-.512-1.279l.727-1.765a1.96 1.96 0 000-1.533L.576 6.218a.977.977 0 01.515-1.28l1.796-.77c.52-.161.923-.59 1.122-1.055h0l.003-.006.728-1.767A.977.977 0 016.018.828l1.766.727a1.96 1.96 0 001.532 0l1.768-.728h0l.007-.003c.462-.198 1.054.03 1.266.56h0l.001.004.727 1.764c.205.542.555.883.998 1.136zM7.96 21.863L5.56 23.8v-4.445h.073c.412 0 .844-.06 1.284-.246l1.435-.564a.415.415 0 01.183-.001l1.433.614c.448.192.938.249 1.342.249h.125V23.8l-2.4-1.937a.8.8 0 00-.537-.201.8.8 0 00-.537.2z"
        ></path>
      </svg>
    ),
  },
  {
    id: 4,
    text: "Forums",
    isActive: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="24"
        fill="none"
        viewBox="0 0 26 24"
      >
        <path
          stroke="#000"
          strokeWidth="0.66"
          d="M21.81 19.938l-.096-.097H7.646V6.239h17.167v16.7l-3.002-3.002z"
        ></path>
        <path
          fill="#F0EEF9"
          stroke="#000"
          strokeWidth="0.66"
          d="M3.332 14.933l.097-.097h14.068V1.234H.33v16.7l3.002-3.001z"
        ></path>
      </svg>
    ),
  },
];

export default function Home({ topics }: HomeProps) {
  return (
    <>
      <Head>
        <title>Skimm Circle</title>
      </Head>

      <main className="grid grid-cols-[256px_1fr_356px]">
        {/* Left Sidebar */}
        <div className="relative flex w-full flex-col items-center gap-40 bg-[#F0EEF9] p-32">
          <div className="flex w-full flex-col items-center justify-center gap-16">
            <div className="relative aspect-square w-[128px] rounded-full bg-gray-300">
              <Image
                src={"https://skimm2poct3.s3.amazonaws.com/users/user1.png"}
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col items-center gap-24 text-14/14">
              <div className="flex flex-col items-center justify-center gap-4">
                <span className="font-sangbleu text-24/24">Becca Harris</span>
                <span className="text-12 uppercase tracking-.1 text-gray-600">
                  Brooklyn, NY
                </span>
              </div>

              <div className="flex w-full items-center gap-16">
                {[
                  { id: 1, top: 4568, bottom: "Vibe Points" },
                  { id: 2, top: 2000, bottom: "Posts" },
                  { id: 3, top: 20, bottom: "Lorem" },
                ].map((item) => {
                  return (
                    <div
                      className="flex flex-col items-center justify-center gap-4"
                      key={item.id}
                    >
                      <span className="text-[11px]/[11px] font-bold">
                        {item.top}
                      </span>
                      <span className="text-[11px]/[11px] text-gray-600">
                        {item.bottom}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <hr className="self-stretch text-gray-600" />

          <div className="sticky top-32 mx-auto flex w-full max-w-[200px] flex-col gap-16">
            {options.map((option) => {
              return (
                <div key={option.id} className="flex items-center gap-16">
                  <div className="flex h-full w-[2px] items-center justify-center">
                    {option.isActive && (
                      <div className="h-full w-full rounded bg-[#6100FF]" />
                    )}
                  </div>

                  <div className="flex items-center gap-16">
                    <div className="flex aspect-square w-[32px] items-center justify-center">
                      {option.icon}
                    </div>

                    <span className="text-14/14 text-gray-800">
                      {option.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex w-full basis-4/6 flex-col gap-48 px-48 py-32">
          <div className="flex flex-col gap-4">
            <span className="font-gt-america-mono text-14 uppercase">
              Friday, March 23, 2023
            </span>
            <span className="font-sangbleu text-32">Hi Becca, TGIF.</span>
          </div>

          <div className="flex flex-col gap-24">
            <Conversation />
          </div>

          <hr className="bg-gray-300" />

          <div className="flex flex-col gap-32">
            <div className="flex items-center gap-12 text-14">
              <button className="border bg-[#DBFF76] px-[10px] py-2">
                For You
              </button>
              <button className="border px-[10px] py-2">Explore</button>
              <button className="border px-[10px] py-2">Trending</button>
            </div>

            <div className="flex flex-col gap-16">
              <span className="text-14 tracking-.02">
                New Threads in{" "}
                <span className="cursor-pointer underline underline-offset-2">
                  Career Switchers Forums:
                </span>
              </span>
              <div className="flex flex-col gap-16">
                <ThreadContent
                  name="Aisha R."
                  text="I've been in my job for 2 years and haven't gotten a raise yet. How can I advocate for one? I'm going to be managing someone for the first time and really want to get it right."
                />
                <ThreadContent
                  name="Maya S."
                  text="I'm going to be managing someone for the first time and really want to get it right. Anyone have tips on where to start?"
                />
                <ThreadContent
                  name="Fatima K."
                  text="Is it worth leaving my job to go to business school?"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-16">
            <span className="text-14">
              Becca people who join Career Switchers
            </span>

            <ul className="grid auto-cols-fr grid-flow-col gap-32">
              {topics.slice(0, 4).map((topic) => {
                return (
                  <Link
                    key={topic.topic_id}
                    href={`/topic/${topic.slug}`}
                    className=""
                  >
                    <div className="flex flex-col items-center justify-center gap-16">
                      <div className="relative aspect-square w-full">
                        <Image
                          src={topic.header_bg_url}
                          alt=""
                          fill
                          className="rounded object-cover"
                        />
                      </div>

                      <span className="whitespace-nowrap font-gt-america-mono text-12/12 uppercase leading-[13px]">
                        {topic.title}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-16">
            <span className="text-14">Watch the Replay</span>

            <div className="aspect-video rounded bg-gray-300" />
          </div>

          <div className="flex flex-col gap-16">
            <span className="text-14">
              Because you&apos;re subscribed to Skimm Your Life
            </span>

            <div className="flex flex-col gap-16">
              <div className="aspect-video rounded bg-gray-300" />

              <div className="flex flex-col gap-2">
                <span className="text-16">Skimm Your Life Newsletter</span>
                <p className="text-14">
                  Let us Skimm your shopping cart, streaming queue, and
                  bookshelf — and help you solve your everyday problems with
                  smart products.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="flex w-full flex-col gap-32 bg-[#FFF8F2] p-32">
          <div className="flex flex-col gap-16">
            <span className="text-14 tracking-.02">Your Premium Content</span>

            <div className="flex flex-col gap-24 rounded border bg-[#F6FAEB] p-16">
              <div className="relative aspect-video rounded bg-gray-300">
                <Image
                  src="/../public/images/career.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-4">
                <span className="font-sangbleu text-24">Career Switcher</span>
                <span className="text-14 font-medium">with Tonya Rapley</span>
                <span className="text-14">
                  Author, entrepreneur, and owner of Club Loofah
                </span>
              </div>

              <hr className="text-gray-600" />

              <div className="flex flex-col">
                <span className="text-12">Next Webinar</span>
                <span className="font-gt-america-mono text-14">
                  Monday 7 to 9 EST
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-12">Progress until XYZ is complete</span>
                <div className="relative w-full">
                  <div className="absolute top-1/2 h-[1px] w-full translate-y-[-50%] bg-black" />
                  <div className="relative w-[66%] rounded border bg-[#D4FF5A] px-4 text-end text-11">
                    60%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-16">
            <span className="text-14 tracking-.02">Topics You Follow</span>

            <div className="flex flex-wrap gap-8">
              {["Womens Health", "Mental Health", "Nutrition", "Career"].map(
                (item) => {
                  return (
                    <span
                      key={item}
                      className="border bg-[#F0EEF9] px-[10px] py-4 font-gt-america-mono text-14 text-gray-800"
                    >
                      {item}
                    </span>
                  );
                }
              )}
            </div>
          </div>

          <div className="flex flex-col gap-16">
            <span className="text-14 tracking-.02">Subscriptions</span>

            <div className="flex flex-wrap gap-8">
              {["Skimm Your Life", "Skimm Well", "Daily Skimm"].map((item) => {
                return (
                  <span
                    key={item}
                    className="border bg-[#F0EEF9] px-[10px] py-4 font-gt-america-mono text-14 text-gray-800"
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const topics = await api.getAllTopics();

  return {
    props: {
      topics,
    },
  };
}

function ThreadContent({ text, name }: { text: string; name: string }) {
  return (
    <div className="relative flex flex-col gap-20 rounded border border-gray-600 p-24 font-gt-america">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="relative aspect-square w-[36px] rounded-full bg-gray-300">
            {/* <Image
              src={discussion.user.photo_url}
              alt=""
              fill
              className="object-cover"
            /> */}
          </div>

          <div className="flex items-center gap-8 text-16/16 text-gray-700">
            <span className="text-16 font-medium">{name}</span>
            {/* <span className="text-14 font-normal text-gray-500">|</span>
            <span className="text-14 font-normal">Coach</span> */}
          </div>
        </div>

        {/* <button className="rounded-sm border border-[#6100FF] px-[10px] py-2 text-12">
          Join
        </button> */}
      </div>

      <p className="text-14 font-light">{text}</p>

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
          <div className="flex items-center gap-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              fill="none"
              viewBox="0 0 24 20"
              className="shrink-0"
            >
              <path
                stroke="#000"
                strokeWidth="0.857"
                d="M11.791 5.786h.429c0-1.497.612-2.807 1.579-3.774 1-.972 2.312-1.583 3.778-1.583 1.496 0 2.806.612 3.774 1.579.972 1 1.583 2.312 1.583 3.778 0 1.497-.614 2.808-1.581 3.776l-9.562 9.561-9.56-9.56C1.26 8.564.649 7.252.649 5.787c0-1.497.613-2.807 1.58-3.774C3.227 1.04 4.54.429 6.004.429c1.497 0 2.807.612 3.774 1.579.972 1 1.584 2.312 1.584 3.778h.428z"
              ></path>
            </svg>
            <span className="font-gt-america-mono text-12/12 uppercase text-gray-600">
              150
            </span>
          </div>

          <div className="flex items-center gap-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className="shrink-0"
            >
              <path
                stroke="#000"
                strokeWidth="0.857"
                d="M19.163 18.086H1.077V.429h22.286v21.68l-3.897-3.898-.126-.125h-.177z"
              ></path>
            </svg>
            <span className="font-gt-america-mono text-12/12 uppercase text-gray-600">
              2k comments
            </span>
          </div>

          <div className="flex items-center gap-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="23"
              fill="none"
              viewBox="0 0 17 23"
              className="shrink-0"
            >
              <path
                stroke="#000"
                strokeWidth="0.86"
                d="M8.47 16.9l-.25-.18-.251.18-7.32 5.261V.43h15.14v21.731l-7.318-5.26z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content({
  user,
  children,
}: {
  user: { name: string; time: string };
  children?: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-16 rounded-lg border border-gray-200 p-32 shadow">
      <div className="flex w-full items-center gap-12">
        <div className="aspect-square w-[52px] shrink-0 rounded-full bg-gray-200" />
        <div className="flex flex-col gap-4">
          <span className="text-[18px]/[18px] text-gray-800">{user.name}</span>
          <span className="text-[10px]/[10px] uppercase tracking-.1 text-gray-600">
            {user.time}
          </span>
        </div>
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
}
