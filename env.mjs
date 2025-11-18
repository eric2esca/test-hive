import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    HELIUS_API_KEY: z.string().optional(),
    BIRDEYE_API_KEY: z.string().optional(),
    BSCSCAN_API_KEY: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_PRIVY_APP_ID: z.string().optional(),
  },
  runtimeEnv: {
    HELIUS_API_KEY: process.env.HELIUS_API_KEY,
    BIRDEYE_API_KEY: process.env.BIRDEYE_API_KEY,
    BSCSCAN_API_KEY: process.env.BSCSCAN_API_KEY,
    NEXT_PUBLIC_PRIVY_APP_ID: process.env.NEXT_PUBLIC_PRIVY_APP_ID,
  },
}); 