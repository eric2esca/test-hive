# Quick Setup Guide

## 🎉 Good News: No Environment Variables Required!

The app has been updated to run **without any environment variables** configured. You can explore the UI immediately!

```bash
npm run dev
```

The app will now:
- ✅ Start successfully without API keys
- ✅ Display the full UI and navigation
- ✅ Show placeholder states for features requiring authentication
- ⚠️  Authentication and wallet features will be disabled
- ⚠️  Some API-dependent features won't work but won't crash the app

## Optional: Add API Keys for Full Functionality

If you want to test authentication and blockchain features, here are the API keys you can add:

### 1. **PRIVY** (Authentication) - **Optional for UI exploration**

Needed for wallet connection and user authentication features.

- Sign up at: https://dashboard.privy.io/
- Create a new app
- Copy your App ID and App Secret
- Add to `.env`:
  ```
  NEXT_PUBLIC_PRIVY_APP_ID=your-app-id-here
  PRIVY_APP_SECRET=your-app-secret-here
  ```

### 2. **Blockchain API Keys** (Optional)

These are now optional but enable blockchain data features:

#### HELIUS (Solana RPC)
- Free tier: https://www.helius.dev/
- Enables: Transaction history, Solana account data
- Add to `.env`:
  ```
  HELIUS_API_KEY=your-helius-key-here
  ```

#### BIRDEYE (Token Prices)
- Free tier: https://birdeye.so/
- Enables: Real-time token prices and portfolio projections
- Add to `.env`:
  ```
  BIRDEYE_API_KEY=your-birdeye-key-here
  ```

#### BSCSCAN (BSC Explorer)
- Free: https://bscscan.com/apis
- Enables: Binance Smart Chain data
- Add to `.env`:
  ```
  BSCSCAN_API_KEY=your-bscscan-key-here
  ```

### 3. **PostHog** (Analytics) - **Optional**

Not required for basic functionality, but good for testing:

- Free tier: https://posthog.com/
- Add to `.env`:
  ```
  NEXT_PUBLIC_POSTHOG_KEY=your-posthog-key-here
  NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
  ```

## Quick Start Steps

### Option 1: Run Without Any Configuration (Recommended for UI Exploration)

```bash
npm run dev
```

That's it! The app will start on http://localhost:3000 and you can explore the UI.

### Option 2: Add API Keys for Full Functionality

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add any API keys you want to test:
   - `NEXT_PUBLIC_PRIVY_APP_ID` + `PRIVY_APP_SECRET` for authentication
   - `HELIUS_API_KEY` for Solana features
   - `BIRDEYE_API_KEY` for price data
   - `BSCSCAN_API_KEY` for BSC features
   - See [.env.example](.env.example) for complete list

3. Start the app:
   ```bash
   npm run dev
   ```

## Additional Services (Optional)

See [.env.example](.env.example) for a complete list of optional services like:
- 0x Protocol (DEX trading)
- Moralis (multi-chain data)
- HelloMoon (Solana analytics)
- Twitter API
- Azure services (storage, search, database)
- And more...

## What Works Without API Keys?

- ✅ UI and navigation
- ✅ Layout and design exploration
- ✅ Component rendering
- ✅ Static pages and routes
- ❌ User authentication (needs Privy)
- ❌ Wallet connections (needs Privy)
- ❌ Real blockchain data (needs API keys)
- ❌ Live token prices (needs Birdeye)
- ❌ Transaction history (needs Helius)
