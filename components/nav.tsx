import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function Nav() {
  return (
    <nav className="bg-soft-teal flex h-64 items-center justify-between bg-[#54003D] px-64 shadow">
      <ul className="flex items-center gap-8">
        <Link href="/">
          <span className="font-sangbleu text-24/24 text-white">
            Skimm Circle
          </span>
        </Link>
        {/* <Link href="/dashboard">Dashboard</Link> */}
      </ul>

      <div className="aspect-square w-[32px] rounded-full bg-white" />
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
