DROP DATABASE IF EXISTS rnb;
CREATE DATABASE rnb;

\c rnb;

-- DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id VARCHAR PRIMARY KEY,
    email VARCHAR,
    username VARCHAR,
    profile_img VARCHAR
);

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    poster_id VARCHAR REFERENCES users(id),
    post_body VARCHAR,
    deleted BOOLEAN
);

CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    post_id INT references posts(id),
    commenter_id VARCHAR references users(id),
    comment_body VARCHAR
);