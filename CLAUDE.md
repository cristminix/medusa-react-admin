# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Admin dashboard that connects to a Medusa e-commerce backend. It uses the `@medusajs/js-sdk` for API communication and `react-admin` for the admin UI framework.

## Development Commands

```bash
# Install dependencies
yarn

# Start development server (runs on all network interfaces)
yarn dev

# Build for production
yarn build

# Preview production build
yarn serve

# Type checking
yarn type-check

# Lint and auto-fix
yarn lint

# Format code
yarn format
```

## Environment Configuration

Create a `.env` file with:
```
VITE_MEDUSA_BACKEND_URL=http://localhost:9000
```

## Architecture

### Data Provider Pattern

This project uses a **resource-specific data provider** pattern. Instead of a single monolithic data provider, each resource has its own provider in `src/<resource>/<resource>Provider.ts`:

- `src/dataProvider.ts` - Main router that delegates to resource-specific providers
- `src/products/productProvider.ts` - Handles product API calls via Medusa SDK
- `src/customers/customerProvider.ts` - Handles customer API calls via Medusa SDK

When adding a new resource:
1. Create `src/<resource>/<resource>Provider.ts` implementing `DataProvider`
2. Register it in the `providers` object in `src/dataProvider.ts`
3. Add the `<Resource>` component in `src/App.tsx`

### Medusa SDK

The Medusa SDK instance is configured in `src/lib/sdk.ts`. Use this singleton for all API calls:

```typescript
import { sdk } from "../lib/sdk";

// List products
const { products, count } = await sdk.admin.product.list({ limit, offset });

// Retrieve single product
const { product } = await sdk.admin.product.retrieve(id);
```

### Authentication

Uses Medusa's JWT authentication via `src/authProvider.ts`. The login flow:
1. Calls `sdk.auth.login("user", "emailpass", { email, password })`
2. Session validation via `sdk.admin.user.me()`

### Resource Views

Each resource follows react-admin conventions:
- `src/<resource>/<Resource>List.tsx` - List view component
- `src/<resource>/<Resource>Show.tsx` - Detail/show view component

### Shared Components

Located in `src/lib/components/`:
- `MetadataField.tsx` - Displays Medusa metadata objects as key-value pairs
- `ImageThumbnailField.tsx` - Displays image thumbnails

## Key Dependencies

- **react-admin** (v5): Admin UI framework with built-in CRUD operations
- **@medusajs/js-sdk** (v2): Official Medusa JavaScript SDK
- **@mui/material** (v7): Material UI for custom components
- **Vite**: Build tool with React plugin

## File Structure

```
src/
├── App.tsx              # Main app with Resource definitions
├── authProvider.ts      # React-admin auth provider using Medusa SDK
├── dataProvider.ts      # Routes API calls to resource-specific providers
├── Layout.tsx           # Custom layout wrapper
├── index.tsx            # React entry point
├── lib/
│   ├── sdk.ts           # Medusa SDK singleton
│   └── components/      # Shared UI components
├── products/
│   ├── ProductList.tsx  # Product list view
│   ├── ProductShow.tsx  # Product detail view
│   └── productProvider.ts
└── customers/
    ├── CustomerList.tsx
    └── customerProvider.ts
```