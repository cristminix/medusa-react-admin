import {
  ArrayField,
  BooleanField,
  ChipField,
  DataTable,
  DateField,
  ImageField,
  List,
  ReferenceField,
  SearchInput,
  SingleFieldList,
  TextInput,
} from "react-admin";

import MetadataField from "../lib/components/MetadataField";

const productFilters = [
  <SearchInput source="q" alwaysOn />,
  <TextInput source="title" />,
  <TextInput source="status" />,
];

export const ProductList = () => (
  <List filters={productFilters}>
    <DataTable>
      <DataTable.Col source="thumbnail">
        <div
          style={{
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            borderRadius: 4,
          }}
        >
          <ImageField
            source="thumbnail"
            sx={{
              "& img": {
                width: "40px !important",
                height: "40px !important",
                minWidth: "40px",
                maxWidth: "40px",
                objectFit: "cover",
                margin: 0,
              },
            }}
            label=""
          />
        </div>
      </DataTable.Col>
      <DataTable.Col source="title" />
      <DataTable.Col source="status" />
      <DataTable.Col source="product_extension.kode" label="Kode" />
      <DataTable.Col source="product_extension.satuan" label="Satuan" />
      <DataTable.Col source="metadata">
        <MetadataField source="metadata" />
      </DataTable.Col>
    </DataTable>
  </List>
);
