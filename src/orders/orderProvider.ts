import { DataProvider } from "react-admin";
import { sdk } from "../lib/sdk";

export const orderProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page = 1, perPage = 10 } = params.pagination || {};
    const { filter = {} } = params;

    const limit = perPage;
    const offset = (page - 1) * perPage;

    const query: Record<string, any> = {
      limit,
      offset,
      fields:
        "+*items,*shipping_address,*billing_address,subtotal,shipping_total,tax_total,discount_total,total,created_at,display_id",
      ...filter,
    };

    try {
      const { orders, count } = await sdk.admin.order.list(query);
      console.log(orders);

      return {
        data: orders,
        total: count,
      };
    } catch (error) {
      console.error("Failed to fetch orders", error);
      throw new Error("Failed to fetch orders");
    }
  },
  getOne: async (resource, params) => {
    try {
      const { order } = await sdk.admin.order.retrieve(
        params.id.toString(),
        {
          fields:
            "+*items,*shipping_address,*billing_address,*shipping_methods,subtotal,shipping_total,tax_total,discount_total,total,summary.*",
        },
      );
      console.log(order);
      return { data: order };
    } catch (error) {
      console.error("Failed to fetch order", error);
      throw new Error("Failed to fetch order");
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