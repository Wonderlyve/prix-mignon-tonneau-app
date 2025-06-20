
-- Create projects table to store submitted projects
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('website', 'mobile')),
  budget INTEGER NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected'))
);

-- Add Row Level Security (RLS) - allow public read/insert for form submissions
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert new projects (for form submissions)
CREATE POLICY "Anyone can submit projects" 
  ON public.projects 
  FOR INSERT 
  WITH CHECK (true);

-- Allow anyone to select projects (for admin view)
CREATE POLICY "Anyone can view projects" 
  ON public.projects 
  FOR SELECT 
  USING (true);

-- Allow anyone to update projects (for admin status changes)
CREATE POLICY "Anyone can update projects" 
  ON public.projects 
  FOR UPDATE 
  USING (true);

-- Create admin_users table for authentication
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on admin_users
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Allow admin authentication
CREATE POLICY "Allow admin authentication" 
  ON public.admin_users 
  FOR SELECT 
  USING (true);

-- Insert the admin user (password hash for 'Wonderlyvebat2025')
INSERT INTO public.admin_users (email, password_hash) 
VALUES ('bat.office2@gmail.com', crypt('Wonderlyvebat2025', gen_salt('bf')));
