const createConnection = require('./redis');

const main = async () => {
  const redis = createConnection();

  await redis.set('foo', 'bar', 'EX', 2);

  // hashes
  await redis.hset('user-hash', {
    name: 'Pranjal',
  });

  const response = await redis.get('foo');
  const name = await redis.hget('user-hash', 'name');
  console.log(name); // "Bob"
  console.log(response);
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

main();
