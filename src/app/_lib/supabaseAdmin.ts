import { createClient } from '@supabase/supabase-js';
import { supabaseUrl, serviceRolKey } from './supabase';

export const supabaseAdmin = createClient(supabaseUrl, serviceRolKey);
