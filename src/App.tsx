import { Admin, Resource, ShowGuesser } from "react-admin";
import { Layout } from "./Layout";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";
import { ProductList } from "./products/ProductList";
import { CustomerList } from "./customers/CustomerList";

export const App = () => (
    <Admin layout={Layout} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="products" list={ProductList} show={ShowGuesser} />
        <Resource name="customers" list={CustomerList} show={ShowGuesser} />
    </Admin>
);
