import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="mt-64 flex items-center justify-center">
      <SignIn />
    </main>
  );
}
