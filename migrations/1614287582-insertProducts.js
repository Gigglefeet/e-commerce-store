const allCandy = [
  {
    name: 'Hraunbitar',
    description: 'Emilia would love this piece of candy',
    price: 10,
    url: '/hraunbitar.jpeg',
  },
  {
    name: 'Djúpur',
    description: 'omg this is so good',
    price: 10,
    url: '/djupur.jpeg',
  },
  {
    name: 'Lakkrísreimar',
    description: 'omg this is so good',
    price: 10,
    url: '/lakkrísreimar.jpeg',
  },
  {
    name: 'Nóa Kropp',
    description: 'omg this is so good',
    price: 10,
    url: '/noakropp.jpeg',
  },
];

exports.up = async (sql) => {
  await sql`
	INSERT INTO ecommercedata
	${sql(allCandy, 'name', 'description', 'price', 'url')}
	`;
};

exports.down = async (sql) => {
  await sql`
		DELETE FROM
		ecommercedata
		`;
};
