import db from "./db";

export function createUser(email, password) {
  const user = {
    email: email,
    password: password,
  };

  const result = db
    .prepare("INSERT INTO users (email, password) VALUES (?, ?)")
    .run(user.email, user.password);
  return result.lastInsertRowid;
}

export function getUserByEmail(email) {
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email);
}
