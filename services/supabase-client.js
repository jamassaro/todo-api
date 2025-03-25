import { createClient } from '@supabase/supabase-js'

const supabase_url = process.env.SUPABASE_DB_URL
const supabase_key = process.env.SUPABASE_SERVICE_ROLE_KEY

const supabase = createClient(
  supabase_url,
  supabase_key     
)

export default supabase