import {
  ArrayField,
  BooleanField,
  ChipField,
  DateField,
  FunctionField,
  Labeled,
  Show,
  SingleFieldList,
  TextField,
  useRecordContext,
} from "react-admin";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Stack,
  Chip,
} from "@mui/material";
import MetadataField from "../lib/components/MetadataField";

const formatCurrency = (amount: number | null | undefined, currencyCode: string) => {
  if (amount == null || isNaN(amount)) return "-";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: currencyCode?.toUpperCase() || "IDR",
  }).format(amount / 100);
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

const StatusChip = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  const value = record[source];

  const getColor = (): "success" | "warning" | "error" | "default" => {
    switch (value) {
      case "published":
        return "success";
      case "draft":
        return "warning";
      case "rejected":
        return "error";
      default:
        return "default";
    }
  };

  const translateStatus = (status: string) => {
    const translations: Record<string, string> = {
      published: "Dipublikasi",
      draft: "Draft",
      rejected: "Ditolak",
      proposed: "Diajukan",
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

const DimensionField = () => {
  const record = useRecordContext();
  if (!record) return null;

  const hasDimensions = record.weight || record.length || record.width || record.height;

  if (!hasDimensions) return <Typography variant="body2">-</Typography>;

  return (
    <Stack spacing={0.5}>
      {record.weight && (
        <Typography variant="body2">
          Berat: {record.weight} g
        </Typography>
      )}
      {record.length && (
        <Typography variant="body2">
          Panjang: {record.length} cm
        </Typography>
      )}
      {record.width && (
        <Typography variant="body2">
          Lebar: {record.width} cm
        </Typography>
      )}
      {record.height && (
        <Typography variant="body2">
          Tinggi: {record.height} cm
        </Typography>
      )}
    </Stack>
  );
};

const VariantCard = () => {
  const record = useRecordContext();
  if (!record) return null;

  return (
    <Card sx={{ mb: 2, border: "1px solid #e0e0e0" }}>
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          {record.title || `Variant ${String(record.id).slice(-6)}`}
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 4 }}>
            <Labeled label="SKU">
              <Typography variant="body2">{record.sku || "-"}</Typography>
            </Labeled>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Labeled label="Barcode">
              <Typography variant="body2">{record.barcode || "-"}</Typography>
            </Labeled>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Labeled label="Kelola Stok">
              <Chip
                label={record.manage_inventory ? "Ya" : "Tidak"}
                size="small"
                color={record.manage_inventory ? "success" : "default"}
              />
            </Labeled>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Labeled label="Backorder">
              <Chip
                label={record.allow_backorder ? "Ya" : "Tidak"}
                size="small"
                color={record.allow_backorder ? "warning" : "default"}
              />
            </Labeled>
          </Grid>
        </Grid>

        {/* Prices */}
        {record.prices && record.prices.length > 0 && (
          <Box mt={2}>
            <Typography variant="subtitle2" gutterBottom>
              Harga:
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {record.prices.map((price: any) => (
                <Chip
                  key={price.id}
                  label={`${price.currency_code?.toUpperCase()}: ${formatCurrency(price.amount, price.currency_code)}`}
                  size="small"
                  variant="outlined"
                />
              ))}
            </Stack>
          </Box>
        )}

        {/* Variant Options */}
        {record.options && record.options.length > 0 && (
          <Box mt={2}>
            <Typography variant="subtitle2" gutterBottom>
              Opsi:
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {record.options.map((opt: any) => (
                <Chip
                  key={opt.id}
                  label={opt.value}
                  size="small"
                />
              ))}
            </Stack>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

const ImageGallery = () => {
  const record = useRecordContext();
  if (!record || !record.images || record.images.length === 0) {
    return <Typography variant="body2">Tidak ada gambar</Typography>;
  }

  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
      {record.images.map((image: any) => (
        <Box
          key={image.id}
          component="img"
          src={image.url}
          alt="Product"
          sx={{
            width: 150,
            height: 150,
            objectFit: "cover",
            borderRadius: 1,
            border: "1px solid #e0e0e0",
          }}
        />
      ))}
    </Stack>
  );
};

export const ProductShow = () => {
  return (
    <Show>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          {/* Basic Information */}
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionCard title="Informasi Produk">
              <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                  <Labeled label="Judul">
                    <TextField source="title" />
                  </Labeled>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Labeled label="Subjudul">
                    <TextField source="subtitle" />
                  </Labeled>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Labeled label="Handle">
                    <TextField source="handle" />
                  </Labeled>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Labeled label="Status">
                    <StatusChip source="status" />
                  </Labeled>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Labeled label="Kategori">
                    <TextField source="collection_id" />
                  </Labeled>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Labeled label="Kartu Hadiah">
                    <BooleanField source="is_giftcard" />
                  </Labeled>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Labeled label="Dapat Diskon">
                    <BooleanField source="discountable" />
                  </Labeled>
                </Grid>
              </Grid>
            </SectionCard>
          </Grid>

          {/* Dimensions & Customs */}
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionCard title="Dimensi & Bea Cukai">
              <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                  <Labeled label="Dimensi">
                    <DimensionField />
                  </Labeled>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Labeled label="HS Code">
                    <TextField source="hs_code" />
                  </Labeled>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Labeled label="Negara Asal">
                    <TextField source="origin_country" />
                  </Labeled>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Labeled label="MID Code">
                    <TextField source="mid_code" />
                  </Labeled>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Labeled label="Material">
                    <TextField source="material" />
                  </Labeled>
                </Grid>
              </Grid>
            </SectionCard>
          </Grid>

          {/* Description */}
          <Grid size={{ xs: 12 }}>
            <SectionCard title="Deskripsi">
              <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
                <TextField source="description" />
              </Typography>
            </SectionCard>
          </Grid>

          {/* Thumbnail */}
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionCard title="Thumbnail">
              <FunctionField
                render={(record: any) =>
                  record?.thumbnail ? (
                    <Box
                      component="img"
                      src={record.thumbnail}
                      alt="Thumbnail"
                      sx={{
                        maxWidth: 200,
                        maxHeight: 200,
                        objectFit: "contain",
                        borderRadius: 1,
                      }}
                    />
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      Tidak ada thumbnail
                    </Typography>
                  )
                }
              />
            </SectionCard>
          </Grid>

          {/* Images */}
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionCard title="Gambar">
              <ImageGallery />
            </SectionCard>
          </Grid>

          {/* Product Options */}
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionCard title="Opsi Produk">
              <ArrayField source="options">
                <SingleFieldList>
                  <FunctionField
                    render={(record: any) => (
                      <Stack spacing={1} sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" fontWeight="bold">
                          {record.title}
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                          {record.values?.map((val: any) => (
                            <Chip key={val.id} label={val.value} size="small" />
                          ))}
                        </Stack>
                      </Stack>
                    )}
                  />
                </SingleFieldList>
              </ArrayField>
            </SectionCard>
          </Grid>

          {/* Tags */}
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionCard title="Tag">
              <ArrayField source="tags">
                <SingleFieldList>
                  <ChipField source="value" />
                </SingleFieldList>
              </ArrayField>
            </SectionCard>
          </Grid>

          {/* Variants */}
          <Grid size={{ xs: 12 }}>
            <SectionCard title="Varian">
              <ArrayField source="variants">
                <SingleFieldList>
                  <VariantCard />
                </SingleFieldList>
              </ArrayField>
            </SectionCard>
          </Grid>

          {/* Sales Channels */}
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionCard title="Saluran Penjualan">
              <ArrayField source="sales_channels">
                <SingleFieldList>
                  <FunctionField
                    render={(record: any) => (
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Chip
                          label={record.name}
                          size="small"
                          color={record.is_disabled ? "default" : "success"}
                        />
                        {record.is_disabled && (
                          <Typography variant="caption" color="text.secondary">
                            (Nonaktif)
                          </Typography>
                        )}
                      </Stack>
                    )}
                  />
                </SingleFieldList>
              </ArrayField>
            </SectionCard>
          </Grid>

          {/* Metadata */}
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionCard title="Metadata">
              <MetadataField source="metadata" />
            </SectionCard>
          </Grid>

          {/* Timestamps */}
          <Grid size={{ xs: 12 }}>
            <SectionCard title="Timestamp">
              <Grid container spacing={2}>
                <Grid size={{ xs: 6, md: 4 }}>
                  <Labeled label="Dibuat">
                    <DateField source="created_at" showTime />
                  </Labeled>
                </Grid>
                <Grid size={{ xs: 6, md: 4 }}>
                  <Labeled label="Diperbarui">
                    <DateField source="updated_at" showTime />
                  </Labeled>
                </Grid>
                <Grid size={{ xs: 6, md: 4 }}>
                  <Labeled label="Dihapus">
                    <DateField source="deleted_at" showTime />
                  </Labeled>
                </Grid>
              </Grid>
            </SectionCard>
          </Grid>
        </Grid>
      </Box>
    </Show>
  );
};