import { client } from "./a";

async function insertdata(username: string, email: string, password: string) {
  try {
    await client.connect();
    const insertQuery =
      "INSERT INTO users (username,email,password) VALUES ($1,$2,$3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log("insertion sucessfully done!", res);
  } catch (err) {
    console.log("error", err);
  } finally {
    await client.end();
  }
}
insertdata("amit", "amit@gmail.com", "12143453465");