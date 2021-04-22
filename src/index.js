const createConnection = require('./redis');

const main = async () => {
  const redis = createConnection();

  await redis.set('foo', 'bar', 'EX', 2);

  const response = await redis.get('foo');
  console.log(response);
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

main();
