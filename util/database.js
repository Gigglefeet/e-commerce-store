import postgres from 'postgres';

// Reads values from the .env file
// Which should be ignored in Git!
require('dotenv-safe').config();

const sql = postgres();

// function camelcaseRecords(records) {
//   return records.map((record) => camelcaseKeys(record));
// }
// this function get the data from the table in the database and returns it in the var candyInfo
// table is called ecommercedata
export function getProductInfo() {
  const candyInfo = sql`SELECT * FROM ecommercedata`;
  return candyInfo;
}
