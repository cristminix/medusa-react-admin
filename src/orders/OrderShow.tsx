import {
  ArrayField,
  DataTable,
  DateField,
  Show,
  TextField,
  useRecordContext,
  Labeled,
} from "react-admin";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Stack,
  Chip,
} from "@mui/material";

const formatCurrency = (amount: number | null | undefined, currencyCode: string) => {
  if (amount == null || isNaN(amount)) return "-";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: currencyCode?.toUpperCase() || "IDR",
  }).format(amount );
};

const StatusChip = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  const value = record[source];

  const getColor = (): "success" | "warning" | "error" | "default" => {
    switch (value) {
      case "completed":
      case "captured":
      case "shipped":
      case "delivered":
        return "success";
      case "pending":
      case "awaiting":
        return "warning";
      case "canceled":
      case "failed":
        return "error";
      default:
        return "default";
    }
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
      awaiting: "Menunggu",
      captured: "Terkonfirmasi",
      partially_refunded: "Sebagian Refund",
      refunded: "Dikembalikan",
      partially_captured: "Sebagian Terkonfirmasi",
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

  return (
    <Chip
      label={translateStatus(value)}
      size="small"
      color={getColor()}
      sx={{ textTransform: "capitalize" }}
    />
  );
};

const SectionCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
        {title}
      </Typography>
      {children}
    </CardContent>
  </Card>
);

const AddressDisplay = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record || !record[source]) return <Typography>-</Typography>;

  const addr = record[source];
  return (
    <Stack spacing={0.5}>
      <Typography variant="body2">
        {addr.first_name} {addr.last_name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {addr.address_1}
      </Typography>
      {addr.address_2 && (
        <Typography variant="body2" color="text.secondary">
          {addr.address_2}
        </Typography>
      )}
      <Typography variant="body2" color="text.secondary">
        {addr.city}, {addr.postal_code}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {addr.country_code?.toUpperCase()}
      </Typography>
      {addr.phone && (
        <Typography variant="body2" color="text.secondary">
          📞 {addr.phone}
        </Typography>
      )}
    </Stack>
  );
};

const OrderSummaryField = () => {
  const record = useRecordContext();
  if (!record) return null;

  const {
    subtotal,
    shipping_total,
    tax_total,
    discount_total,
    total,
    currency_code,
  } = record;

  return (
    <Stack spacing={1}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body2" color="text.secondary">
          Subtotal
        </Typography>
        <Typography variant="body2">
          {formatCurrency(subtotal, currency_code)}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body2" color="text.secondary">
          Ongkos Kirim
        </Typography>
        <Typography variant="body2">
          {formatCurrency(shipping_total, currency_code)}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body2" color="text.secondary">
          Pajak
        </Typography>
        <Typography variant="body2">
          {formatCurrency(tax_total, currency_code)}
        </Typography>
      </Box>
      {discount_total > 0 && (
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" color="text.secondary">
            Diskon
          </Typography>
          <Typography variant="body2" color="error">
            -{formatCurrency(discount_total, currency_code)}
          </Typography>
        </Box>
      )}
      <Divider sx={{ my: 1 }} />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="subtitle1" fontWeight="bold">
          Total
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" color="primary">
          {formatCurrency(total, currency_code)}
        </Typography>
      </Box>
    </Stack>
  );
};

export const OrderShow = () => {
  return (
    <Show>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          {/* Order Info */}
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionCard title="Informasi Pesanan">
              <Grid container spacing={2}>
                <Grid size={{ xs: 6 }}>
                  <Labeled label="No. Pesanan">
                    <TextField source="display_id" />
                  </Labeled>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Labeled label="Mata Uang">
                    <TextField source="currency_code" />
                  </Labeled>
                </Grid>
                <Grid size={{ xs: 4 }}>
                  <Labeled label="Status">
                    <StatusChip source="status" />
                  </Labeled>
                </Grid>
                <Grid size={{ xs: 4 }}>
                  <Labeled label="Pembayaran">
                    <StatusChip source="payment_status" />
                  </Labeled>
                </Grid>
                <Grid size={{ xs: 4 }}>
                  <Labeled label="Pengiriman">
                    <StatusChip source="fulfillment_status" />
                  </Labeled>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Labeled label="Dibuat">
                    <DateField source="created_at" showTime />
                  </Labeled>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Labeled label="Diperbarui">
                    <DateField source="updated_at" showTime />
                  </Labeled>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Labeled label="Email">
                    <TextField source="email" />
                  </Labeled>
                </Grid>
              </Grid>
            </SectionCard>
          </Grid>

          {/* Order Summary */}
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionCard title="Ringkasan Pesanan">
              <OrderSummaryField />
            </SectionCard>
          </Grid>

          {/* Order Items */}
          <Grid size={{ xs: 12 }}>
            <SectionCard title="Daftar Produk">
              <ArrayField source="items">
                <DataTable>
                  <DataTable.Col source="title" label="Produk" />
                  <DataTable.Col source="variant_title" label="Varian" />
                  <DataTable.Col source="quantity" label="Jumlah" />
                  <DataTable.Col source="unit_price" label="Harga Satuan">
                    <UnitPriceField />
                  </DataTable.Col>
                  <DataTable.Col source="total" label="Total">
                    <TotalField />
                  </DataTable.Col>
                </DataTable>
              </ArrayField>
            </SectionCard>
          </Grid>

          {/* Addresses */}
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionCard title="Alamat Pengiriman">
              <AddressDisplay source="shipping_address" />
            </SectionCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionCard title="Alamat Penagihan">
              <AddressDisplay source="billing_address" />
            </SectionCard>
          </Grid>

          {/* Shipping Methods */}
          <Grid size={{ xs: 12 }}>
            <SectionCard title="Metode Pengiriman">
              <ArrayField source="shipping_methods">
                <DataTable>
                  <DataTable.Col source="name" label="Nama" />
                  <DataTable.Col source="amount" label="Biaya">
                    <ShippingAmountField />
                  </DataTable.Col>
                </DataTable>
              </ArrayField>
            </SectionCard>
          </Grid>
        </Grid>
      </Box>
    </Show>
  );
};

// Helper fields that use currency_code from parent record
const UnitPriceField = () => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <Typography variant="body2">
      {formatCurrency(record.unit_price, record.currency_code || "IDR")}
    </Typography>
  );
};

const TotalField = () => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <Typography variant="body2">
      {formatCurrency(record.total, record.currency_code || "IDR")}
    </Typography>
  );
};

const ShippingAmountField = () => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <Typography variant="body2">
      {formatCurrency(record.amount, record.currency_code || "IDR")}
    </Typography>
  );
};