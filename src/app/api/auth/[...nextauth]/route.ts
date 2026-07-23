import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        // @ts-ignore
        session.user.id = user.id;
        // @ts-ignore
        session.user.username = user.username;
        // @ts-ignore
        session.user.plan = user.plan;
      }
      return session;
    },
  },
  pages: {
    // We can define custom pages here later (e.g., /login, /onboarding)
    signIn: '/login',
  }
});

export { handler as GET, handler as POST };
