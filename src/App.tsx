import { Admin, Resource, ShowGuesser } from "react-admin";
import { Layout } from "./Layout";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";
import { ProductList } from "./products/ProductList";
import { CustomerList } from "./customers/CustomerList";
import { ProductShow } from "./products/ProductShow";

export const App = () => (
  <Admin
    layout={Layout}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="products" list={ProductList} show={ProductShow} />
    <Resource name="customers" list={CustomerList} show={ShowGuesser} />
  </Admin>
);
