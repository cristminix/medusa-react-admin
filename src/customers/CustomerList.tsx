import {
  Datagrid,
  DateField,
  EmailField,
  FunctionField,
  List,
  TextField,
  BooleanField,
} from "react-admin";
import MetadataField from "../lib/components/MetadataField";

export const CustomerList = () => (
  <List>
    <Datagrid>
      {/* <EmailField source="email" /> */}
      <FunctionField
        label="Nama Lengkap"
        render={(record: any) =>
          `${record?.first_name || ""} ${record?.last_name || ""}`.trim()
        }
      />
      <TextField source="company_name" label="Nama Usaha/Toko/Outlet" />
      {/* <TextField source="phone" label="No. Telp" /> */}
      <BooleanField source="metadata.email_verified" label="Email Verified" textAlign="center" />
      <BooleanField source="metadata.document_verified" label="Document Verified" textAlign="center" />
      <FunctionField
        label="Punya Alamat Utama"
        textAlign="center"
        render={(record: any) => (
          <BooleanField
            source="has_address"
            record={{ has_address: !!record?.metadata?.default_address }}
          />
        )}
      />

      {/* <DataTable.Col source="metadata" label="Status">
        <MetadataField source="metadata" />
      </DataTable.Col> */}
      <DateField source="created_at" label="Waktu Pendaftaran" />

    </Datagrid>
  </List>
);
