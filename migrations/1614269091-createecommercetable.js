exports.up = async (sql) => {
  await sql`
CREATE TABLE ecommercedata (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
name VARCHAR(50),
description TEXT,
price INT,
url VARCHAR(100)
);
	`;
};

exports.down = async (sql) => {
  await sql`
	DROP TABLE ecommercedata
	`;
};
