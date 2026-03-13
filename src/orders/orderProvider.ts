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
        "id,status,payment_status,fulfillment_status,email,currency_code,display_id,created_at," +
        "total,subtotal,tax_total,discount_total," +
        "original_total,original_subtotal,original_tax_total," +
        "shipping_total,shipping_subtotal,shipping_tax_total," +
        "original_shipping_total,original_shipping_subtotal,original_shipping_tax_total," +
        "item_total,item_subtotal,item_tax_total," +
        "original_item_total,original_item_subtotal,original_item_tax_total," +
        "gift_card_total,gift_card_tax_total," +
        "summary.*,items.*,shipping_address.*,billing_address.*",
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
      const { order } = await sdk.admin.order.retrieve(params.id.toString(), {
        fields:
          "id,status,payment_status,fulfillment_status,email,currency_code,display_id,created_at," +
          "total,subtotal,tax_total,discount_total," +
          "original_total,original_subtotal,original_tax_total," +
          "shipping_total,shipping_subtotal,shipping_tax_total," +
          "original_shipping_total,original_shipping_subtotal,original_shipping_tax_total," +
          "item_total,item_subtotal,item_tax_total," +
          "original_item_total,original_item_subtotal,original_item_tax_total," +
          "gift_card_total,gift_card_tax_total," +
          "summary.*,items.*,items.product.*,items.variant.*," +
          "shipping_address.*,billing_address.*,shipping_methods.*",
      });
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
