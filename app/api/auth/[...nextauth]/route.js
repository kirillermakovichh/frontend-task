import NextAuth from "next-auth/next";
import { options } from "./options"

/* The code is creating a handler function using the NextAuth library and the provided options. The
handler function can be used to handle both GET and POST requests. By exporting the handler function
as both GET and POST, it allows the handler to be used for both types of requests. */
const handler = NextAuth(options);

export { handler as GET, handler as POST };
