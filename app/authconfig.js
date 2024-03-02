export const authConfig = {
    Providers:[],
    pages: {
        signIn: "/Login",
    },
    callbacks: {
        authorized({ auth, request }) {
            const isLoggedIn = auth?.user;
            const isOnDashboard = request.nextUrl.pathname.starWith("/dashboard");
            if(isOnDashboard) {
                if (isLoggedIn) return true;
                return false;
            } else if (isLoggedIn) {
                return Response.redirect(new URL("/dashboard", request.nextUrl));
            }
            return true;
        },
    },
};

