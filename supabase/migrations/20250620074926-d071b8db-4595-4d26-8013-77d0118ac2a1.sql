
-- Mettre à jour la table admin_users pour inclure l'utilisateur admin
INSERT INTO public.admin_users (email, password_hash) 
VALUES ('tonappadmin@admin.com', crypt('Wonderdevtonapp2020', gen_salt('bf')))
ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash;

-- Créer une fonction pour vérifier les identifiants admin
CREATE OR REPLACE FUNCTION public.verify_admin_credentials(admin_email text, admin_password text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 
    FROM public.admin_users 
    WHERE email = admin_email 
    AND password_hash = crypt(admin_password, password_hash)
  );
END;
$$;
