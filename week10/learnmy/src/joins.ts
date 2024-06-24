import { client } from "./a";

async function joins(userid: string) {
  try {
    await client.connect();

    const query = `SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1`;

    const result = await client.query(query, [userid]);
    if (result.rows.length > 0) {
      console.log("User and address found:", result.rows[0]);
      return result.rows[0];
    } else {
      console.log("No user or address found with the given ID.");
      return null;
    }
  } catch (err) {
    console.log(err);
  } finally {
    await client.end();
  }
}

joins("1");
