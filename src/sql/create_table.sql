CREATE TABLE IF NOT EXISTS users(
    _id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS chats(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT Null,
    message VARCHAR(255) NOT Null
);