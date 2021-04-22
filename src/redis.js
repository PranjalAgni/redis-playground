const Redis = require('ioredis');

const createConnection = () => {
  const redis = new Redis({
    port: 6379,
    host: 'localhost',
  });

  redis.on('error', function (error) {
    console.error(error);
  });

  return redis;
};

module.exports = createConnection;
