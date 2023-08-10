import GithubProvider from "next-auth/providers/github";

/* The code is exporting an object named `options` which contains a property named `providers`. The
`providers` property is an array that contains a single element, which is an instance of the
`GithubProvider` class. */
export const options = {
  providers: [
    GithubProvider({
      profile(profile) {

        return {
            ...profile,
            id: profile.id,
            image: profile.avatar_url,
        }
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};
