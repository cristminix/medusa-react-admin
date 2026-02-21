
import { DataProvider } from "react-admin";
import { sdk } from "../lib/sdk";

export const productProvider: DataProvider = {
    getList: async (resource, params) => {
        const { page = 1, perPage = 10 } = params.pagination || {};
        // const { field, order } = params.sort; // This line is commented out based on the instruction.

        const limit = perPage;
        const offset = (page - 1) * perPage;

        try {
            const { products, count } = await sdk.admin.product.list({
                limit,
                offset,
                fields: '+metadata',
            });
            console.log(products);

            return {
                data: products,
                total: count,
            };
        } catch (error) {
            console.error("Failed to fetch products", error);
            throw new Error("Failed to fetch products");
        }
    },
    getOne: async (resource, params) => {
        try {
            const { product } = await sdk.admin.product.retrieve(params.id.toString(), {
                fields: '+metadata',
            });
            console.log(product);
            return { data: product };
        } catch (error) {
            console.error("Failed to fetch product", error);
            throw new Error("Failed to fetch product");
        }
    },
    getMany: () => Promise.reject("Not implemented"),
    getManyReference: () => Promise.reject("Not implemented"),
    update: () => Promise.reject("Not implemented"),
    updateMany: () => Promise.reject("Not implemented"),
    create: () => Promise.reject("Not implemented"),
    delete: () => Promise.reject("Not implemented"),
    deleteMany: () => Promise.reject("Not implemented"),
};
