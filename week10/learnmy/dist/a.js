"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const pg_1 = require("pg");
exports.client = new pg_1.Client({
    connectionString: "postgresql://testdb_owner:sh8dT7XeHvwB@ep-fragrant-flower-a5x3gdzf.us-east-2.aws.neon.tech/testdb?sslmode=require",
});
// async function createUserTable() {
//   await client.connect();
//   const result = await client.query(`
//             CREATE TABLE users (
//     id SERIAL PRIMARY KEY,                         //create    ----------table
//     username VARCHAR(50) UNIQUE NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// );
//         `);
//   console.log(result);
// }
// createUserTable();
/////////////////////////////////insert data ------------------------------
// async function insertdata(username: string, email: string, password: string) {
//   try {
//     await client.connect();
//     const insertQuery =
//       "INSERT INTO users (username,email,password) VALUES ($1,$2,$3)";
//     const values = [username, email, password];
//     const res = await client.query(insertQuery, values);
//     console.log("insertion sucessfully done!", res);
//   } catch (err) {
//     console.log("error", err);
//   } finally {
//     await client.end();
//   }
// }
// insertdata("amit", "amit@gmail.com", "12143453465");
////////////////////////////////////query from table=-------------------------------------
// async function getUser(email: string) {
//   try {
//     client.connect();
//     const query = "SELECT * FROM users WHERE email=$1";
//     const value = [email];
//     const result = await client.query(query, value);
//     if (result.rows.length > 0) {
//       console.log("User found:", result.rows[0]); // Output user data
//       return result.rows[0]; // Return the user data
//     } else {
//       console.log("No user found with the given email.");
//       return null; // Return null if no user was found
//     }
//   } catch (err) {
//     console.log("error during fetching data", err);
//   } finally {
//     await client.end();
//   }
// }
// getUser("sumit@gmail.com");
/////////////////////////////////////build relationship table using  foreign key=-------------------
// async function createaddresstable() {
//   await client.connect();
//   const res = await client.query(`CREATE TABLE addresses (
//     id SERIAL PRIMARY KEY,
//     user_id INTEGER NOT NULL,
//     city VARCHAR(100) NOT NULL,
//     country VARCHAR(100) NOT NULL,
//     street VARCHAR(255) NOT NULL,
//     pincode VARCHAR(20),
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
// );`);
//   console.log(res);
// }
// createaddresstable();
