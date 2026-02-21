
import { DataProvider } from "react-admin";
import { sdk } from "../lib/sdk";

export const customerProvider: DataProvider = {
    getList: async (_resource, params) => {
        const { page = 1, perPage = 10 } = params.pagination || {};
        // const { field, order } = params.sort;

        const limit = perPage;
        const offset = (page - 1) * perPage;

        try {
            const { customers, count } = await sdk.admin.customer.list({
                limit,
                offset,
            });

            return {
                data: customers,
                total: count,
            };
        } catch (error) {
            console.error("Failed to fetch customers", error);
            throw new Error("Failed to fetch customers");
        }
    },
    getOne: async (_resource, params) => {
        try {
            const { customer } = await sdk.admin.customer.retrieve(params.id.toString());
            return { data: customer };
        } catch (error) {
            console.error("Failed to fetch customer", error);
            throw new Error("Failed to fetch customer");
        }
    },
    getMany: () => Promise.reject("Not implemented"),
    getManyReference: () => Promise.reject("Not implemented"),
    update: () => Promise.reject("Not implemented"),
    updateMany: () => Promise.reject("Not implemented"),
    create: () => Promise.reject("Not implemented"),
    delete: async (_resource, params) => {
        try {
            await sdk.admin.customer.delete(params.id.toString());
            return { data: params.previousData as any };
        } catch (error) {
            console.error("Failed to delete customer", error);
            throw new Error("Failed to delete customer");
        }
    },
    deleteMany: async (_resource, params) => {
        try {
            await Promise.all(
                params.ids.map((id) => sdk.admin.customer.delete(id.toString()))
            );
            return { data: params.ids };
        } catch (error) {
            console.error("Failed to delete customers", error);
            throw new Error("Failed to delete customers");
        }
    },
};
