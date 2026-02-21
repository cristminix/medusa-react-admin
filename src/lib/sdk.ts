import Medusa from "@medusajs/js-sdk";

export const sdk = new Medusa({
    baseUrl: import.meta.env.VITE_MEDUSA_BACKEND_URL || "http://192.168.0.107:9000",
    debug: import.meta.env.DEV,
    auth: {
        type: "jwt",
    },
});
