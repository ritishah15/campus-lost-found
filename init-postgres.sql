-- Users table (auth-service)
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(20) DEFAULT 'student',
  department VARCHAR(100),
  avatar_color VARCHAR(20) DEFAULT '#4CAF50',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Claims table (claim-service)
CREATE TABLE IF NOT EXISTS claims (
  id SERIAL PRIMARY KEY,
  item_id VARCHAR(50) NOT NULL,
  claimant_id INTEGER NOT NULL,
  claimant_name VARCHAR(100) NOT NULL,
  claimant_email VARCHAR(150) NOT NULL,
  description TEXT NOT NULL,
  status VARCHAR(30) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_claims_item_id ON claims(item_id);
CREATE INDEX IF NOT EXISTS idx_claims_claimant_id ON claims(claimant_id);
CREATE INDEX IF NOT EXISTS idx_claims_status ON claims(status);
