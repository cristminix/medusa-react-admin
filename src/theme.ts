import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7C3AED",
      light: "#A78BFA",
      dark: "#5B21B6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#06B6D4",
      light: "#67E8F9",
      dark: "#0891B2",
      contrastText: "#ffffff",
    },
    background: {
      default: "#0F0F1A",
      paper: "#1A1A2E",
    },
    surface: {
      main: "#16213E",
    },
    text: {
      primary: "#F1F5F9",
      secondary: "#94A3B8",
    },
    divider: "rgba(255,255,255,0.08)",
    success: {
      main: "#10B981",
    },
    error: {
      main: "#F43F5E",
    },
    warning: {
      main: "#F59E0B",
    },
    info: {
      main: "#06B6D4",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    subtitle1: { fontWeight: 500 },
    button: { fontWeight: 600, textTransform: "none" },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@import":
          "url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap')",
        body: {
          background: "linear-gradient(135deg, #0F0F1A 0%, #1A1A2E 100%)",
          minHeight: "100vh",
        },
        "::-webkit-scrollbar": {
          width: "6px",
          height: "6px",
        },
        "::-webkit-scrollbar-track": {
          background: "#1A1A2E",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#4B5563",
          borderRadius: "3px",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "#7C3AED",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "linear-gradient(180deg, #0D0D1F 0%, #1A1A2E 100%)",
          borderRight: "1px solid rgba(124,58,237,0.2)",
          boxShadow: "4px 0 24px rgba(0,0,0,0.4)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(90deg, #0D0D1F 0%, #1A1A2E 100%) !important",
          borderBottom: "1px solid rgba(124,58,237,0.2)",
          boxShadow: "0 2px 16px rgba(0,0,0,0.4) !important",
          backdropFilter: "blur(10px)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)",
          border: "1px solid rgba(124,58,237,0.15)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            boxShadow: "0 8px 30px rgba(124,58,237,0.2)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "8px 18px",
          fontWeight: 600,
          transition: "all 0.2s ease",
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
          boxShadow: "0 4px 14px rgba(124,58,237,0.4)",
          "&:hover": {
            background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
            boxShadow: "0 6px 20px rgba(124,58,237,0.5)",
            transform: "translateY(-1px)",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        },
        head: {
          background: "rgba(124,58,237,0.08)",
          color: "#A78BFA",
          fontWeight: 600,
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          transition: "background 0.15s ease",
          "&:hover": {
            background: "rgba(124,58,237,0.06) !important",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid rgba(255,255,255,0.06)",
        },
        elevation1: {
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: "6px",
        },
        colorPrimary: {
          background: "rgba(124,58,237,0.2)",
          color: "#A78BFA",
          border: "1px solid rgba(124,58,237,0.3)",
        },
        colorSuccess: {
          background: "rgba(16,185,129,0.15)",
          color: "#34D399",
          border: "1px solid rgba(16,185,129,0.3)",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          margin: "2px 8px",
          padding: "10px 12px",
          transition: "all 0.2s ease",
          "&:hover": {
            background: "rgba(124,58,237,0.12)",
            transform: "translateX(2px)",
          },
          "&.Mui-selected": {
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.25) 0%, rgba(91,33,182,0.2) 100%)",
            borderLeft: "3px solid #7C3AED",
            paddingLeft: "9px",
            "&:hover": {
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.35) 0%, rgba(91,33,182,0.3) 100%)",
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            "& fieldset": {
              borderColor: "rgba(124,58,237,0.3)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(124,58,237,0.5)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#7C3AED",
            },
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: "#1A1A2E",
          border: "1px solid rgba(124,58,237,0.3)",
          borderRadius: "8px",
          fontSize: "0.75rem",
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7C3AED",
      light: "#A78BFA",
      dark: "#5B21B6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#06B6D4",
    },
    background: {
      default: "#F1F5F9",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#0F172A",
      secondary: "#64748B",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    button: { fontWeight: 600, textTransform: "none" },
  },
  shape: { borderRadius: 12 },
});
