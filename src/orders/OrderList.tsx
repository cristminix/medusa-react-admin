import {
  DataTable,
  DateField,
  List,
  SearchInput,
  TextInput,
  useRecordContext,
} from "react-admin";
import { Chip } from "@mui/material";

const orderFilters = [
  <SearchInput source="q" alwaysOn />,
  <TextInput source="status" label="Status" />,
  <TextInput source="email" label="Email" />,
];

const formatCurrency = (amount: number | null | undefined, currencyCode: string) => {
  if (amount == null || isNaN(amount)) return "-";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: currencyCode?.toUpperCase() || "IDR",
  }).format(amount);
};

const translateStatus = (status: string) => {
  const translations: Record<string, string> = {
    // Order status
    pending: "Menunggu",
    completed: "Selesai",
    archived: "Diarsipkan",
    canceled: "Dibatalkan",
    requires_action: "Perlu Tindakan",
    // Payment status
    not_paid: "Belum Dibayar",
    awaiting: "Menunggu Pembayaran",
    authorized: "Disepakati",
    partially_authorized: "Sebagian Disetujui",
    captured: "Sudah Dibayar",
    partially_captured: "Sebagian Dibayar",
    refunded: "Dikembalikan",
    partially_refunded: "Sebagian Dikembalikan",
    failed: "Gagal",
    // Fulfillment status
    not_fulfilled: "Belum Dikirim",
    partially_fulfilled: "Sebagian Dikirim",
    fulfilled: "Terkirim",
    partially_shipped: "Sebagian Dikirim",
    shipped: "Dikirim",
    delivered: "Terkirim",
    partially_delivered: "Sebagian Terkirim",
  };
  return translations[status] || status;
};

const getStatusColor = (status: string): "success" | "warning" | "error" | "default" => {
  switch (status) {
    case "completed":
    case "captured":
    case "shipped":
    case "delivered":
    case "authorized":
      return "success";
    case "pending":
    case "awaiting":
    case "partially_authorized":
    case "partially_captured":
      return "warning";
    case "canceled":
    case "failed":
      return "error";
    default:
      return "default";
  }
};

const StatusField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  const value = record[source];
  return (
    <Chip
      label={translateStatus(value)}
      size="small"
      color={getStatusColor(value)}
    />
  );
};

const DisplayIdField = () => {
  const record = useRecordContext();
  if (!record || record.display_id == null) return null;
  return <span>#{String(record.display_id).padStart(4, "0")}</span>;
};

const TotalField = () => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <span>{formatCurrency(record.total, record.currency_code)}</span>
  );
};

export const OrderList = () => (
  <List filters={orderFilters} sort={{ field: "created_at", order: "DESC" }}>
    <DataTable>
      <DataTable.Col source="display_id" label="No. Pesanan">
        <DisplayIdField />
      </DataTable.Col>
      {/* <DataTable.Col source="email" label="Email" /> */}
      <DataTable.Col source="status" label="Status">
        <StatusField source="status" />
      </DataTable.Col>
      <DataTable.Col source="payment_status" label="Pembayaran">
        <StatusField source="payment_status" />
      </DataTable.Col>
      <DataTable.Col source="fulfillment_status" label="Pengiriman">
        <StatusField source="fulfillment_status" />
      </DataTable.Col>
      <DataTable.Col source="total" label="Total">
        <TotalField />
      </DataTable.Col>
      {/* <DataTable.Col source="currency_code" label="Mata Uang" /> */}
      <DataTable.Col source="created_at" label="Tanggal">
        <DateField source="created_at" showTime />
      </DataTable.Col>
    </DataTable>
  </List>
);