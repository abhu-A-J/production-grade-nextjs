import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default (req, res) => {
  NextAuth(req, res, {
    session: {
      // use JWTs instead
      jwt: true,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    },
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      // ...add more providers here
    ],
    database: process.env.DATABASE_URL,
    // don't use the your own sigin page , use mine at /sigin and I'll handle errors
    pages: {
      signIn: '/signin',
    },
  })
}
