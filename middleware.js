// export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(request) {
    console.log(request.nextUrl.pathname);
    console.log(request.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "admin"
    },
  }
);

export const config = { matcher: "/app/:path*" };
