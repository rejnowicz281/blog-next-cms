import Credentials from "next-auth/providers/credentials";

const authOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                if (!credentials || !credentials.password) return null;

                const validPassword = credentials.password === process.env.CMS_PASS;

                if (validPassword) return { name: "Alan" };

                return null;
            },
        }),
    ],
    pages: {
        signIn: "/login",
        signOut: "/logout",
    },
};

export default authOptions;
