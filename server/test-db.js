import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);

const { data, error } = await supabase
  .from('products')
  .select('*')
  .limit(10);

console.log('DATA:', data);
console.log('ERROR:', error);
