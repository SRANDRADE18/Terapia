/*
  # Create appointment slots table

  1. New Tables
    - `appointment_slots`
      - `id` (uuid, primary key)
      - `day_of_week` (integer, 0-6 where 0=Sunday)
      - `time_slot` (text, format "HH:MM")
      - `is_available` (boolean, default true)
      - `created_at` (timestamptz)
      
  2. Security
    - Enable RLS on `appointment_slots` table
    - Add policy for public read access (anyone can see available slots)
    - Add policy for authenticated users to manage slots (future admin feature)

  3. Initial Data
    - Populate with sample time slots for weekdays
*/

CREATE TABLE IF NOT EXISTS appointment_slots (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  day_of_week integer NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6),
  time_slot text NOT NULL,
  is_available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointment_slots ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view appointment slots"
  ON appointment_slots FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert slots"
  ON appointment_slots FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update slots"
  ON appointment_slots FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete slots"
  ON appointment_slots FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample time slots for Monday to Friday (1-5)
INSERT INTO appointment_slots (day_of_week, time_slot, is_available)
VALUES
  -- Monday
  (1, '09:00', true),
  (1, '10:00', true),
  (1, '14:00', true),
  (1, '15:00', true),
  (1, '16:00', true),
  -- Tuesday
  (2, '09:00', true),
  (2, '10:00', true),
  (2, '14:00', true),
  (2, '15:00', true),
  (2, '16:00', true),
  -- Wednesday
  (3, '09:00', true),
  (3, '10:00', true),
  (3, '14:00', true),
  (3, '15:00', true),
  (3, '16:00', true),
  -- Thursday
  (4, '09:00', true),
  (4, '10:00', true),
  (4, '14:00', true),
  (4, '15:00', true),
  (4, '16:00', true),
  -- Friday
  (5, '09:00', true),
  (5, '10:00', true),
  (5, '14:00', true),
  (5, '15:00', true),
  (5, '16:00', true)
ON CONFLICT DO NOTHING;