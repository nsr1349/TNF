import { supabase } from '@/lib/supabaseClient';

export default async function (req, res) {
  supabase.auth.api.setAuthCookie(req, res);
}