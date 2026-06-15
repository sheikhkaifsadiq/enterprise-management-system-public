import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// SECURITY: Implementation redacted for public repository
export const supabaseAdmin = new Proxy({} as ReturnType<typeof createClient<Database>>, {
  get() {
    throw new Error("Admin client redacted for security.");
  },
});
