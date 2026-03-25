import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://owturbocsmlixbyuccfr.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93dHVyYm9jc21saXhieXVjY2ZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0MDc3MTIsImV4cCI6MjA4OTk4MzcxMn0.j6VHPADa2e2jrhuvfhooATAmPqhwl6r83FD0B8C0U14'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
