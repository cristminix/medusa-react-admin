
import { DataProvider } from "react-admin";
import { productProvider } from "./products/productProvider";
import { customerProvider } from "./customers/customerProvider";

const providers: Record<string, DataProvider> = {
    products: productProvider,
    customers: customerProvider,
};

export const dataProvider: DataProvider = {
    getList: (resource, params) => {
        return providers[resource].getList(resource, params);
    },
    getOne: (resource, params) => {
        return providers[resource].getOne(resource, params);
    },
    getMany: (resource, params) => {
        return providers[resource].getMany(resource, params);
    },
    getManyReference: (resource, params) => {
        return providers[resource].getManyReference(resource, params);
    },
    update: (resource, params) => {
        return providers[resource].update(resource, params);
    },
    updateMany: (resource, params) => {
        return providers[resource].updateMany(resource, params);
    },
    create: (resource, params) => {
        return providers[resource].create(resource, params);
    },
    delete: (resource, params) => {
        return providers[resource].delete(resource, params);
    },
    deleteMany: (resource, params) => {
        return providers[resource].deleteMany(resource, params);
    },
};
