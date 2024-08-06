
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://owwvpeaqziqyyuktttdy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93d3ZwZWFxemlxeXl1a3R0dGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2ODkxNTQsImV4cCI6MjAzODI2NTE1NH0.g44tsShWQ091GTNi5VWDTE67Rd1r9g2RU3lgKR4hlCA'
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;