import GithubProvider from "next-auth/providers/github";

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
