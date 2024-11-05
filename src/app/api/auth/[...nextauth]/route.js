import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import AzureADProvider from 'next-auth/providers/azure-ad';
import axios from 'axios';

const authOptions = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_CLIENT_ID,
      clientSecret: process.env.AZURE_CLIENT_SECRET,
      tenantId: process.env.AZURE_TENANT_ID,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      console.log('signIn');
      return true;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        console.log('jwt');
        // try {
        //   const response = await axios.post(`${process.env.BACKEND_URL}/api/v1/auth/google-login`, {
        //     token: account.id_token,
        //   });
        //   token.backendToken = response.data.token;
        // } catch (error) {
        //   console.error('Error authenticating with backend:', error);
        //   token.backendToken = null;
        // }
      }
      return token;
    },
    async session({ session, token }) {
      console.log('session');
      session.backendToken = token.backendToken;
      return session;
    },
    redirect: async (url, baseUrl) => baseUrl,
  },
  debug: true,
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};