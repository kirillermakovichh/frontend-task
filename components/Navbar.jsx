import Link from "next/link";
import { options } from "../app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function Navbar() {
  /* The line `const session = await getServerSession(options);` is retrieving the user session from the
server. It is using the `getServerSession` function from the `next-auth/next` package and passing in
the `options` object as an argument. The `options` object contains the configuration for the
authentication provider. The `await` keyword is used to wait for the session to be retrieved before
continuing with the execution of the code. The retrieved session is then stored in the `session`
variable. */
  const session = await getServerSession(options);

  return (
    <nav className="flex justify-between items-center bg-teal-800 px-8 py-4 rounded sm:px-3">
      <div>
        <Link
          className="text-white font-bold mr-4 sm:text-black sm:bg-white sm:rounded-full sm:py-1 sm:px-2 sm:mr-2"
          href={"/"}
        >
          E<span className="sm:hidden">rmakovich</span>
        </Link>
        {session && (
          <Link
            className="bg-green-500 px-3 py-2 rounded-full text-white font-bold"
            href={"/addTopic"}
          >
            Add Topic
          </Link>
        )}
      </div>
      <div className="flex items-center">
        <span className="text-white sm:hidden">{session?.user.name}</span>
        <img
          src={session?.user.image}
          alt=""
          className="w-10 rounded-full mx-4 sm:mx-2"
        />
        {!session && (
          <Link className="text-white font-bold" href="/api/auth/signin">
            Sign In
          </Link>
        )}
        {session && (
          <Link className="text-white font-bold" href="/api/auth/signout">
            Sign out
          </Link>
        )}
      </div>
    </nav>
  );
}
