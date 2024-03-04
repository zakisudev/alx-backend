/**
 * 0. Install a redis client and connect to a redis server
 */
import redis from 'redis';

const Newclient = redis.createClient();

// when npm run dev 0-redis_client.js USE:
// redis-7.2.4/src/redis-server > /dev/null 2>&1 & because
// the src is in the redis-7.2.4 folder!
Newclient.on('ready', () =>
  console.log('Redis client connected to the server')
).on('error', (err) =>
  console.log(`Redis client not connected to the server: ${err}`)
);

const setNewSchool = (schoolName, value) => {
  Newclient.set(schoolName, value, redis.print);
};

const displaySchoolValue = (schoolName) => {
  Newclient.get(schoolName, (_, reply) => {
    console.log(`${reply}`);
  });
};

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
