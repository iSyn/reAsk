BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS questions CASCADE;


CREATE TABLE users (
  id SERIAL ,
  username VARCHAR NOT NULL,
  course VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  type VARCHAR NOT NULL DEFAULT 'student'
  );


CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  -- created timestamp NOT NULL DEFAULT localtimestamp,
  username VARCHAR NOT NULL,
  votes INT NOT NULL,
  question_title VARCHAR NOT NULL,
  question_body VARCHAR NOT NULL,
  question_tags VARCHAR NOT NULL
);

-- ALTER TABLE ONLY users
-- ADD CONSTRAINT username_pkey PRIMARY KEY (username);

-- ALTER TABLE ONLY questions
-- ADD CONSTRAINT username_fkey FOREIGN KEY (username)
-- REFERENCES users(username) On DELETE CASCADE;

COMMIT;
