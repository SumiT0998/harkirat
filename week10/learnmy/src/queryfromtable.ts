import { client } from "./a";

async function getUser(email: string) {
  try {
    client.connect();
    const query = "SELECT * FROM users WHERE email=$1";
    const value = [email];
    const result = await client.query(query, value);
    if (result.rows.length > 0) {
      console.log("User found:", result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      console.log("No user found with the given email.");
      return null; // Return null if no user was found
    }
  } catch (err) {
    console.log("error during fetching data", err);
  } finally {
    await client.end();
  }
}

getUser("sumit@gmail.com");
