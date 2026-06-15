import { createMiddleware } from '@tanstack/react-start'

export const requireSupabaseAuth = createMiddleware({ type: 'function' }).server(
  async ({ next }) => {
    // SECURITY: Implementation redacted for public repository
    return next({
      context: {
        supabase: null as any,
        userId: "redacted",
        claims: {} as any,
      },
    });
  },
);
