import { AuthProvider } from "react-admin";
import { sdk } from "./lib/sdk";

export const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
        try {
            await sdk.auth.login("user", "emailpass", {
                email: username,
                password: password,
            });
        } catch (error) {
            throw new Error("Invalid email or password");
        }
    },
    logout: async () => {
        try {

            await sdk.auth.logout();
        } catch (error) {
            console.error("Logout failed", error);
        }
        return Promise.resolve();
    },
    checkError: async (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: async () => {
        try {
            // Try to fetch the session or current user
            const { user } = await sdk.admin.user.me();
            if (!user) {
                return Promise.reject();
            }
            return Promise.resolve();
        } catch (error) {
            return Promise.reject();
        }
    },
    getPermissions: () => Promise.resolve(),
};
