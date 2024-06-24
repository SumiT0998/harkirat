import { client } from "./a";

async function insertAdressData(
  user_id: number,
  city: string,
  country: string,
  street: string,
  pincode: string
) {
  try {
    await client.connect();

    const insertquery =
      "INSERT INTO addresses(user_id, city, country, street, pincode) VALUES ($1,$2,$3,$4,$5)";
    const values = [user_id, city, country, street, pincode];
    const res = await client.query(insertquery, values);
    console.log("insertion sucessfull at table adress", res);
  } catch (err) {
    console.log("eroor in insertion", err);
  } finally {
    await client.end();
  }
}

// insertAdressData(1, "New York", "USA", "123 Broadway St", "10001");
insertAdressData(2, "delhi", "IND", "123 punjabi bagh ", "248001");
