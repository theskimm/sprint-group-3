import Link from "next/link";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Conversation from "./conversation";

function Nav() {
  return (
    <nav className="bg-soft-teal flex h-64 items-center justify-between bg-[#54003D] px-64 shadow">
      <ul className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 30 30"
          >
            <g clipPath="url(#clip0_71_3272)">
              <path
                fill="#00C4B3"
                d="M7.003 15H0c0 8.295 6.705 15 15 15v-7.003A7.992 7.992 0 017.003 15z"
              ></path>
              <path
                fill="#DBE1C7"
                d="M15 7.003V0C6.705 0 0 6.705 0 15h7.003A7.992 7.992 0 0115 7.003z"
              ></path>
              <path
                fill="#6100FF"
                d="M15 0v7.003A7.992 7.992 0 0122.997 15H30c0-8.295-6.705-15-15-15z"
              ></path>
              <path
                fill="#FFE5CE"
                d="M15 22.997V30c8.295 0 15-6.705 15-15h-7.003A7.992 7.992 0 0115 22.997z"
              ></path>
              <path
                fill="#FF542F"
                d="M15 22.997A7.992 7.992 0 0022.997 15H15v7.997z"
              ></path>
              <path
                fill="#D7EAF0"
                d="M7.003 15A7.992 7.992 0 0015 22.997V15H7.003z"
              ></path>
              <path
                fill="#54003D"
                d="M22.997 15A7.992 7.992 0 0015 7.003V15h7.997z"
              ></path>
              <path
                fill="#D4FF5A"
                d="M7.003 15H15V7.003A7.992 7.992 0 007.003 15z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_71_3272">
                <path fill="#fff" d="M0 0H30V30H0z"></path>
              </clipPath>
            </defs>
          </svg>

          <span className="font-sangbleu text-24/24 text-white">
            Skimm Circle
          </span>
        </Link>
        {/* <Link href="/dashboard">Dashboard</Link> */}
      </ul>

      <div className="flex items-center gap-24">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="31"
              fill="none"
              viewBox="0 0 36 31"
            >
              <circle cx="6" cy="16" r="2" fill="#00C4B3"></circle>
              <circle cx="12" cy="16" r="2" fill="#00C4B3"></circle>
              <circle cx="18" cy="16" r="2" fill="#00C4B3"></circle>
              <path
                stroke="#fff"
                strokeWidth="0.857"
                d="M18.514 25.086H.43V7.429h22.285v21.68l-3.897-3.898-.125-.125h-.178z"
              ></path>
              <circle cx="28" cy="8" r="8" fill="#00C4B3"></circle>
              <path
                fill="#fff"
                d="M28.822 11h-1.07V9.894H25.47v-.787l2.074-3.129h1.279v3.064h.708v.852h-.708V11zM26.43 9.042h1.323V7.618c0-.21 0-.383.021-.664h-.007c-.08.224-.145.354-.29.563l-.765 1.156a2.373 2.373 0 01-.282.369z"
              ></path>
            </svg>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />

            <Dialog.Content>
              <div className="fixed bottom-[32px] right-[32px] w-[650px] rounded-[6px] bg-white p-32">
                <div className="flex flex-col gap-24">
                  <Conversation />
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="31"
          fill="none"
          viewBox="0 0 30 31"
        >
          <path
            stroke="#fff"
            strokeWidth="0.8"
            d="M21.765 21.288h0l.003.003c1.063.86 1.704 2.032 1.815 3.309H.418c.115-1.274.776-2.448 1.817-3.312C4.77 19.187 6.4 16.26 6.4 13c0-3.08 2.52-5.6 5.6-5.6 3.108 0 5.6 2.52 5.6 5.6 0 3.26 1.63 6.187 4.165 8.288zM12 30.6a2.611 2.611 0 01-2.569-2.2h5.138A2.611 2.611 0 0112 30.6z"
          ></path>
          <circle cx="22" cy="8" r="8" fill="#00C4B3"></circle>
          <path
            fill="#fff"
            d="M18.826 7.532c-.21.18-.557.296-1.027.296h-.23V6.78h.187c.723 0 1.07-.282 1.286-.802h.932v4.09h1.207V11h-3.634v-.932h1.279V7.532zm4.914 3.576c-1.236 0-1.98-.766-1.98-2.615 0-1.857.744-2.623 1.98-2.623s1.98.766 1.98 2.623c0 1.85-.744 2.615-1.98 2.615zm-.831-2.615c0 .23.015.44.029.621l1.445-1.958c-.137-.318-.354-.44-.643-.44-.542 0-.824.418-.831 1.777zm.152 1.235c.137.39.361.535.679.535.542 0 .824-.426.831-1.77 0-.29-.015-.535-.043-.745l-1.467 1.98z"
          ></path>
        </svg>

        <div className="relative aspect-square w-[32px] rounded-full bg-gray-300">
          <Image
            src={"https://skimm2poct3.s3.amazonaws.com/users/user1.png"}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
      {/* <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">
          <div className="flex items-center justify-center rounded bg-highlight-teal px-32 py-8">
            <span className="text-14/14 font-medium">Sign In</span>
          </div>
        </Link>
      </SignedOut> */}
    </nav>
  );
}

export default Nav;
