
-- @block
CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT, 
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- @block
INSERT INTO users (username, password)
VALUES (
    'iHeartHorror',
    MD5('frienduser')
  );

-- @block
SELECT * FROM users;

--@block
DELETE FROM Users WHERE id != 1;

-- @block
DROP TABLE users;
