import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://grlobakuvjfyigqeguyt.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdybG9iYWt1dmpmeWlncWVndXl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwOTA2NTcsImV4cCI6MjAzNTY2NjY1N30.EOfvL7okB2PXPJYstKbCqpbfJ2orfvGgxQnJySn4F0o"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase