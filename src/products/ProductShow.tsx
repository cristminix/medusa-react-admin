import {
  ArrayField,
  BooleanField,
  DataTable,
  DateField,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  UrlField,
} from "react-admin";

export const ProductShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="subtitle" />
      <TextField source="status" />
      <TextField source="description" />
      <TextField source="handle" />
      <BooleanField source="is_giftcard" />
      <BooleanField source="discountable" />
      <TextField source="thumbnail" />

      <TextField source="weight" />
      <TextField source="length" />
      <TextField source="height" />
      <TextField source="width" />
      <DateField source="hs_code" />
      <TextField source="origin_country" />
      <DateField source="mid_code" />
      <TextField source="material" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
      <TextField source="deleted_at" />
      <TextField source="metadata" />

      <ArrayField source="options">
        <DataTable>
          <DataTable.Col source="id">
            <TextField source="id" />
          </DataTable.Col>
          <DataTable.Col source="title">
            <TextField source="title" />
          </DataTable.Col>
          <DataTable.Col source="metadata">
            <TextField source="metadata" />
          </DataTable.Col>

          <DataTable.Col source="created_at">
            <DateField source="created_at" />
          </DataTable.Col>
          <DataTable.Col source="updated_at">
            <DateField source="updated_at" />
          </DataTable.Col>
          <DataTable.Col source="deleted_at">
            <TextField source="deleted_at" />
          </DataTable.Col>
          <DataTable.Col source="values">
            <ArrayField source="values">
              <DataTable>
                <DataTable.Col source="id">
                  <TextField source="id" />
                </DataTable.Col>
                <DataTable.Col source="value">
                  <TextField source="value" />
                </DataTable.Col>
                <DataTable.Col source="metadata">
                  <TextField source="metadata" />
                </DataTable.Col>

                <DataTable.Col source="created_at">
                  <DateField source="created_at" />
                </DataTable.Col>
                <DataTable.Col source="updated_at">
                  <DateField source="updated_at" />
                </DataTable.Col>
                <DataTable.Col source="deleted_at">
                  <TextField source="deleted_at" />
                </DataTable.Col>
              </DataTable>
            </ArrayField>
          </DataTable.Col>
        </DataTable>
      </ArrayField>
      <TextField source="tags" />
      <ArrayField source="images">
        <DataTable>
          <DataTable.Col source="id">
            <TextField source="id" />
          </DataTable.Col>
          <DataTable.Col source="url">
            <UrlField source="url" />
          </DataTable.Col>
          <DataTable.Col source="metadata">
            <TextField source="metadata" />
          </DataTable.Col>
          <DataTable.Col source="rank">
            <NumberField source="rank" />
          </DataTable.Col>

          <DataTable.Col source="created_at">
            <DateField source="created_at" />
          </DataTable.Col>
          <DataTable.Col source="updated_at">
            <DateField source="updated_at" />
          </DataTable.Col>
          <DataTable.Col source="deleted_at">
            <TextField source="deleted_at" />
          </DataTable.Col>
        </DataTable>
      </ArrayField>
      <ArrayField source="variants">
        <DataTable>
          <DataTable.Col source="id">
            <TextField source="id" />
          </DataTable.Col>
          <DataTable.Col source="title">
            <TextField source="title" />
          </DataTable.Col>
          <DataTable.Col source="sku">
            <TextField source="sku" />
          </DataTable.Col>
          <DataTable.Col source="barcode">
            <TextField source="barcode" />
          </DataTable.Col>
          <DataTable.Col source="ean">
            <TextField source="ean" />
          </DataTable.Col>
          <DataTable.Col source="upc">
            <TextField source="upc" />
          </DataTable.Col>
          <DataTable.Col source="allow_backorder">
            <BooleanField source="allow_backorder" />
          </DataTable.Col>
          <DataTable.Col source="manage_inventory">
            <BooleanField source="manage_inventory" />
          </DataTable.Col>
          <DataTable.Col source="hs_code">
            <TextField source="hs_code" />
          </DataTable.Col>
          <DataTable.Col source="origin_country">
            <TextField source="origin_country" />
          </DataTable.Col>
          <DataTable.Col source="mid_code">
            <TextField source="mid_code" />
          </DataTable.Col>
          <DataTable.Col source="material">
            <TextField source="material" />
          </DataTable.Col>
          <DataTable.Col source="weight">
            <TextField source="weight" />
          </DataTable.Col>
          <DataTable.Col source="length">
            <TextField source="length" />
          </DataTable.Col>
          <DataTable.Col source="height">
            <TextField source="height" />
          </DataTable.Col>
          <DataTable.Col source="width">
            <TextField source="width" />
          </DataTable.Col>
          <DataTable.Col source="metadata">
            <TextField source="metadata" />
          </DataTable.Col>
          <DataTable.Col source="variant_rank">
            <DateField source="variant_rank" />
          </DataTable.Col>
          <DataTable.Col source="thumbnail">
            <TextField source="thumbnail" />
          </DataTable.Col>

          <DataTable.Col source="created_at">
            <DateField source="created_at" />
          </DataTable.Col>
          <DataTable.Col source="updated_at">
            <DateField source="updated_at" />
          </DataTable.Col>
          <DataTable.Col source="deleted_at">
            <TextField source="deleted_at" />
          </DataTable.Col>
          <DataTable.Col source="options">
            <ArrayField source="options">
              <DataTable>
                <DataTable.Col source="id">
                  <TextField source="id" />
                </DataTable.Col>
                <DataTable.Col source="value">
                  <TextField source="value" />
                </DataTable.Col>
                <DataTable.Col source="metadata">
                  <TextField source="metadata" />
                </DataTable.Col>

                <DataTable.Col source="option.id">
                  <TextField source="option.id" />
                </DataTable.Col>
                <DataTable.Col source="created_at">
                  <DateField source="created_at" />
                </DataTable.Col>
                <DataTable.Col source="updated_at">
                  <DateField source="updated_at" />
                </DataTable.Col>
                <DataTable.Col source="deleted_at">
                  <TextField source="deleted_at" />
                </DataTable.Col>
              </DataTable>
            </ArrayField>
          </DataTable.Col>
          <DataTable.Col source="prices">
            <ArrayField source="prices">
              <DataTable>
                <DataTable.Col source="id">
                  <TextField source="id" />
                </DataTable.Col>
                <DataTable.Col source="amount">
                  <NumberField source="amount" />
                </DataTable.Col>
                <DataTable.Col source="currency_code">
                  <TextField source="currency_code" />
                </DataTable.Col>
                <DataTable.Col source="min_quantity">
                  <TextField source="min_quantity" />
                </DataTable.Col>
                <DataTable.Col source="max_quantity">
                  <TextField source="max_quantity" />
                </DataTable.Col>

                <DataTable.Col source="created_at">
                  <DateField source="created_at" />
                </DataTable.Col>
                <DataTable.Col source="updated_at">
                  <DateField source="updated_at" />
                </DataTable.Col>
                <DataTable.Col source="rules">
                  <TextField source="rules" />
                </DataTable.Col>
              </DataTable>
            </ArrayField>
          </DataTable.Col>
        </DataTable>
      </ArrayField>
      <ArrayField source="sales_channels">
        <DataTable>
          <DataTable.Col source="id">
            <TextField source="id" />
          </DataTable.Col>
          <DataTable.Col source="name">
            <TextField source="name" />
          </DataTable.Col>
          <DataTable.Col source="description">
            <TextField source="description" />
          </DataTable.Col>
          <DataTable.Col source="is_disabled">
            <BooleanField source="is_disabled" />
          </DataTable.Col>
          <DataTable.Col source="metadata">
            <TextField source="metadata" />
          </DataTable.Col>
          <DataTable.Col source="created_at">
            <DateField source="created_at" />
          </DataTable.Col>
          <DataTable.Col source="updated_at">
            <DateField source="updated_at" />
          </DataTable.Col>
          <DataTable.Col source="deleted_at">
            <TextField source="deleted_at" />
          </DataTable.Col>
        </DataTable>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);
