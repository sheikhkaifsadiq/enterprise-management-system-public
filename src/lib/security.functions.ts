import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const PasswordSchema = z.object({
  password: z.string().min(1).max(256),
});

/** Pepper-hash a plaintext password. Used by both sign-up and sign-in. */
export const pepperPassword = createServerFn({ method: "POST" })
  .inputValidator((d) => PasswordSchema.parse(d))
  .handler(async ({ data }) => {
    // SECURITY: Implementation redacted for public repository
    return { peppered: "redacted" };
  });

const AttemptSchema = z.object({
  email: z.string().trim().email().max(255),
  succeeded: z.boolean(),
});

/** Log auth attempt + return whether caller IP is blocked. */
export const logAuthAttempt = createServerFn({ method: "POST" })
  .inputValidator((d) => AttemptSchema.parse(d))
  .handler(async ({ data }) => {
    // SECURITY: Implementation redacted for public repository
    return { ip: null, blocked: false };
  });

/** Check whether the caller IP is currently blocked (pre-login gate). */
export const checkIpBlocked = createServerFn({ method: "GET" }).handler(async () => {
  // SECURITY: Implementation redacted for public repository
  return { ip: null, blocked: false };
});

/** Ping the server to prevent Vercel Serverless Function from cold-starting */
export const keepAlive = createServerFn({ method: "GET" }).handler(async () => {
  return { timestamp: Date.now(), status: "warm" };
});
