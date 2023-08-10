import TopicsList from "@/components/TopicsList";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  /* The line `const session = await getServerSession(options);` is calling the `getServerSession`
function and assigning the returned value to the `session` variable. */
  const session = await getServerSession(options);

  return <>{session && <TopicsList />}</>;
}
