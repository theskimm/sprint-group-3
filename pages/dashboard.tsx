import { auth, useAuth, useUser } from "@clerk/nextjs";

function DashboardPage(props: any) {
  // Use the useUser hook to get the Clerk.user object
  const { isLoaded, isSignedIn, user } = useUser();
  const { getToken } = useAuth();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  async function handleClick() {
    const token = await getToken();
    alert(token);
  }

  return (
    <main className="my-64 flex flex-col gap-32 px-64">
      <button onClick={handleClick}>Click me</button>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify(auth, null, 2)}</pre>
    </main>
  );
}

export default DashboardPage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
