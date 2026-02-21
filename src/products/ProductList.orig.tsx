import { ArrayField, BooleanField, ChipField, DataTable, DateField, List, ReferenceField, SingleFieldList } from 'react-admin';

export const ProductList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="title" />
            <DataTable.Col source="subtitle" />
            <DataTable.Col source="status" />
            <DataTable.Col source="external_id">
                <ReferenceField source="external_id" reference="externals" />
            </DataTable.Col>
            <DataTable.Col source="description" />
            <DataTable.Col source="handle" />
            <DataTable.Col source="is_giftcard">
                <BooleanField source="is_giftcard" />
            </DataTable.Col>
            <DataTable.Col source="discountable">
                <BooleanField source="discountable" />
            </DataTable.Col>
            <DataTable.Col source="thumbnail" />
            <DataTable.Col source="collection_id">
                <ReferenceField source="collection_id" reference="collections" />
            </DataTable.Col>
            <DataTable.Col source="type_id">
                <ReferenceField source="type_id" reference="types" />
            </DataTable.Col>
            <DataTable.Col source="weight" />
            <DataTable.Col source="length" />
            <DataTable.Col source="height" />
            <DataTable.Col source="width" />
            <DataTable.Col source="hs_code">
                <DateField source="hs_code" />
            </DataTable.Col>
            <DataTable.Col source="origin_country" />
            <DataTable.Col source="mid_code">
                <DateField source="mid_code" />
            </DataTable.Col>
            <DataTable.Col source="material" />
            <DataTable.Col source="created_at">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="updated_at">
                <DateField source="updated_at" />
            </DataTable.Col>
            <DataTable.Col source="deleted_at" />
            <DataTable.Col source="metadata" />
            <DataTable.Col source="type.id" />
            <DataTable.Col source="collection.id" />
            <DataTable.Col source="options">
                <ArrayField source="options">
                    <SingleFieldList>
                        <ChipField source="id" />
                    </SingleFieldList>
                </ArrayField>
            </DataTable.Col>
            <DataTable.Col source="tags" />
            <DataTable.Col source="images">
                <ArrayField source="images">
                    <SingleFieldList>
                        <ChipField source="id" />
                    </SingleFieldList>
                </ArrayField>
            </DataTable.Col>
            <DataTable.Col source="variants">
                <ArrayField source="variants">
                    <SingleFieldList>
                        <ChipField source="id" />
                    </SingleFieldList>
                </ArrayField>
            </DataTable.Col>
            <DataTable.Col source="sales_channels">
                <ArrayField source="sales_channels">
                    <SingleFieldList>
                        <ChipField source="id" />
                    </SingleFieldList>
                </ArrayField>
            </DataTable.Col>
        </DataTable>
    </List>
);