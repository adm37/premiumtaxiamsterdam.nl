import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://plkonfmrklaxhfyrphxu.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsa29uZm1ya2xheGhmeXJwaHh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg5MjYzNzEsImV4cCI6MjA4NDUwMjM3MX0.TBNzh3124Hwe864Zc6_3xvnj8fMV471Ws6dOAkSuWgo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
