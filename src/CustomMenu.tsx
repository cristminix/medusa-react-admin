import { Menu, useResourceDefinitions, useSidebarState } from "react-admin";
import { Box, Typography, Divider } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

export const CustomMenu = () => {
  const resources = useResourceDefinitions();
  const [open] = useSidebarState();

  const iconMap: Record<string, React.ReactNode> = {
    products: <InventoryIcon sx={{ fontSize: 20 }} />,
    customers: <PeopleIcon sx={{ fontSize: 20 }} />,
    orders: <ReceiptLongIcon sx={{ fontSize: 20 }} />,
  };

  const labelMap: Record<string, string> = {
    products: "Produk",
    customers: "Pelanggan",
    orders: "Pesanan",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        pt: 0,
      }}
    >
      {/* Logo Area */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          px: 2,
          py: 2.5,
          borderBottom: "1px solid rgba(124,58,237,0.15)",
          mb: 1,
        }}
      >
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: "10px",
            background: "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 14px rgba(124,58,237,0.4)",
            flexShrink: 0,
          }}
        >
          <StorefrontIcon sx={{ color: "white", fontSize: 20 }} />
        </Box>
        {open && (
          <Box>
            <Typography
              variant="subtitle2"
              
            >
              Toko Pawon B2B
            </Typography>
            <Typography
              variant="caption"
              
            >
              Dashboard
            </Typography>
          </Box>
        )}
      </Box>

      {/* Nav Section Label */}
      {open && (
        <Typography
          variant="caption"
          sx={{
            color: "#475569",
            fontWeight: 600,
            fontSize: "0.65rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            px: 2.5,
            py: 1,
          }}
        >
          Navigasi
        </Typography>
      )}

      {/* Menu Items */}
      <Menu>
        {Object.keys(resources).map((name) => (
          <Menu.Item
            key={name}
            to={`/${name}`}
            primaryText={labelMap[name] || name}
            leftIcon={iconMap[name]}
          />
        ))}
      </Menu>

      {/* Bottom spacer */}
      <Box sx={{ flexGrow: 1 }} />
      {open && (
        <Box sx={{ p: 2, }}>
          
        </Box>
      )}
    </Box>
  );
};
