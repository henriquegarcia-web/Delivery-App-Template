CREATE DATABASE db_delivery;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE IF NOT EXISTS users (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL,
  phone VARCHAR NOT NULL UNIQUE,
);

CREATE TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  category_id UUID,
  FOREIGN KEY(category_id) REFERENCES users(id)
);

-- CREATE TABLE IF NOT EXISTS products (
--   id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
--   name VARCHAR NOT NULL,
--   category_id UUID,
--   FOREIGN KEY(category_id) REFERENCES users(id)
-- );
