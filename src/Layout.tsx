import type { ReactNode } from "react";
import {
  Layout as RALayout,
  CheckForApplicationUpdate,
  AppBar,
  TitlePortal,
  ToggleThemeButton,
} from "react-admin";
import { Box, Typography } from "@mui/material";
import { CustomMenu } from "./CustomMenu";

const CustomAppBar = () => (
  <AppBar
    sx={{
      "& .RaAppBar-menuButton": {
        color: "#FFFFFF",
      },
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        px: 1,
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          color: "#FFFFFF",
          fontWeight: 700,
          fontFamily: "Inter, sans-serif",
          letterSpacing: "0.02em",
          display: { xs: "none", sm: "block" },
        }}
      >
        Toko Pawon B2B
      </Typography>
    </Box>
    <TitlePortal />
  </AppBar>
);

export const Layout = ({ children }: { children: ReactNode }) => (
  <RALayout
    appBar={CustomAppBar}
    menu={CustomMenu}
    sx={{
      "& .RaLayout-content": {
        background: "transparent",
        padding: { xs: "8px", sm: "12px 16px" },
      },
      "& .RaLayout-appFrame": {
        marginTop: "64px",
      },
      "& .MuiDrawer-paper": {
        width: "220px",
      },
      "& .RaSidebar-fixed": {
        width: "220px",
      },
    }}
  >
    {children}
    <CheckForApplicationUpdate />
  </RALayout>
);
