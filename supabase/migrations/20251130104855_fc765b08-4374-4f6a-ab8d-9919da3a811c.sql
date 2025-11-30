-- Create donors table
CREATE TABLE public.donors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  age INTEGER NOT NULL CHECK (age >= 18 AND age <= 65),
  gender TEXT NOT NULL CHECK (gender IN ('Male', 'Female', 'Other')),
  blood_group TEXT NOT NULL CHECK (blood_group IN ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')),
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.donors ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read donor information (public data for finding donors)
CREATE POLICY "Allow public read access to donors"
  ON public.donors
  FOR SELECT
  TO public
  USING (true);

-- Allow anyone to insert donor information (public registration)
CREATE POLICY "Allow public insert access to donors"
  ON public.donors
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create index for faster blood group searches
CREATE INDEX idx_donors_blood_group ON public.donors(blood_group);
CREATE INDEX idx_donors_is_available ON public.donors(is_available);