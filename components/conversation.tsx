import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { flushSync } from "react-dom";

const conversation = [
  { id: 1, type: "bot", text: "How did this week go?" },
  { id: 2, type: "self", text: "It was not my best week." },
  {
    id: 3,
    type: "bot",
    text: "That's OK! Sometimes we can't do it all. Do you want a recommendation for a quick read or podcast?",
  },
  { id: 4, type: "self", text: "No, I think I just want to vent" },
  {
    id: 5,
    type: "bot",
    text: "I get that. You can keep chatting with me, or here's a forum where you can chat with other users in your circle about burnout: www.circle.theskim.com/burnout.",
  },
];

export default function Conversation() {
  const [count, setCount] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleClick() {
    flushSync(() => {
      setCount((count) => count + 1);
    });

    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1500);
  }

  return (
    <>
      {conversation.slice(0, count).map((message) => {
        if (message.type === "bot") {
          return (
            <BotMessage
              key={message.id}
              message={message}
              callback={() => {
                if (inputRef.current) {
                  inputRef.current!.focus();
                }
              }}
            />
          );
        }

        return (
          <div
            className="flex flex-row-reverse items-center gap-12"
            key={message.id}
          >
            <div className="relative aspect-square w-32 shrink-0">
              <Image
                src="https://skimm2poct3.s3.amazonaws.com/users/user1.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <span className="rounded-full bg-[#D7EAF0] px-16 py-8 text-14">
              {message.text}
            </span>
          </div>
        );
      })}

      <form
        className="relative"
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <input
          ref={inputRef}
          key={count}
          placeholder="You can type anything to Cindy and she'll help you"
          className="w-full rounded-full bg-[#F1FCFF] px-[24px] py-[14px] text-14/16 focus:outline-none"
        />

        <button className="absolute right-[24px] top-[50%] translate-y-[-50%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            fill="none"
            viewBox="0 0 16 15"
          >
            <path
              fill="#000"
              fillOpacity="0.3"
              d="M10 .75v4c-8 0-10 4.1-10 10 1.04-3.96 4-6 8-6h2v4l6-6.32-6-5.68z"
            ></path>
          </svg>
        </button>
      </form>
    </>
  );
}

function BotMessage({ message, callback }: { message: any; callback: any }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex items-center gap-12">
      <div className="flex aspect-square w-[32px] shrink-0 items-center justify-center rounded-full border bg-[#F0EEF9] text-14 font-medium">
        C
      </div>

      {isLoading ? (
        <TypeAnimation
          sequence={[
            message.text,
            () => {
              setIsLoading(false);
            },
            callback(),
          ]}
          wrapper="span"
          speed={65}
          className="rounded-full border bg-white px-16 py-8 text-14"
        />
      ) : (
        <>
          {" "}
          <span className="rounded-full border bg-white px-16 py-8 text-14">
            {message.text}
          </span>
          <div className="flex items-center gap-8">
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="none"
                viewBox="0 0 15 15"
              >
                <path
                  stroke="#000"
                  strokeWidth="0.694"
                  d="M8.994.35h0L9.007.35a.184.184 0 01.07.004.892.892 0 01.066.017l.032.01.057.016c.328.119.505.481.396.836a69.757 69.757 0 00-.534 1.87c-.108.4-.212.803-.29 1.14-.073.318-.133.621-.133.794 0 .68.582 1.353 1.35 1.353h3.005c.368 0 .655.286.655.66 0-.001 0 0 0 0-.001.007-.004.035-.016.095a4.86 4.86 0 01-.061.253c-.055.208-.134.477-.23.79a95.19 95.19 0 01-.707 2.171 239.34 239.34 0 01-.942 2.742l-.065.186-.018.05v.002a.69.69 0 01-.62.406H4.355V6.368c.506-.064.97-.271 1.342-.644.08-.08.17-.216.257-.356.094-.15.205-.34.325-.556.24-.43.527-.972.808-1.515.519-1.003 1.025-2.02 1.202-2.377l.036-.072c.155-.293.42-.471.67-.497zM1.657 13.745H.347V6.389h1.31v7.355z"
                ></path>
              </svg>
            </button>
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="none"
                viewBox="0 0 15 15"
              >
                <path
                  stroke="#000"
                  strokeWidth="0.694"
                  d="M6.006 13.74h0l-.013.002a.184.184 0 01-.07-.003.921.921 0 01-.066-.018l-.032-.01a.668.668 0 01-.453-.852 69.84 69.84 0 00.534-1.87c.108-.4.212-.803.29-1.139.073-.319.133-.622.133-.795 0-.68-.582-1.353-1.35-1.353H1.975a.647.647 0 01-.655-.659v-.001c.001-.007.004-.035.016-.094a4.87 4.87 0 01.061-.254 21.2 21.2 0 01.23-.79c.192-.623.45-1.405.707-2.171A236.67 236.67 0 013.275.99L3.34.805l.018-.049V.753a.69.69 0 01.62-.406h6.667v7.376c-.506.064-.97.271-1.342.645-.08.08-.17.216-.257.355-.094.15-.205.341-.325.556-.24.431-.527.973-.808 1.516-.519 1.002-1.025 2.02-1.202 2.376l-.036.073c-.155.292-.42.47-.67.497zM13.343.348h1.31v7.355h-1.31V.347z"
                ></path>
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
