import { useRecordContext, ImageField } from "react-admin";
import { Box, Typography } from "@mui/material";

const ImageThumbnailField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record || !record[source]) return null;

  const thumbnail = record[source];

  return (
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
      <Box
        component="img"
        src={thumbnail}
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
  );
};

export default ImageThumbnailField;
