import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Se as chaves estiverem faltando, não tentamos criar o cliente real para não quebrar a aplicação
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : ({
      from: () => ({
        select: () => ({
          eq: () => ({
            order: () => ({
              order: () => Promise.resolve({ data: [], error: null })
            })
          })
        })
      })
    } as any);

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Configuração do Supabase ausente. Verifique o arquivo .env');
}
