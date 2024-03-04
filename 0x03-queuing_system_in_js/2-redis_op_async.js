/**
 * Author: Kwenziwa Lizwi Khanyile
 * Github: @kwenziwa
 * Date Created: February 1, 2024
 */
import redis from 'redis';
import { promisify } from 'util';

const Newclient = redis.createClient();
const getAsync = promisify(Newclient.get).bind(Newclient);

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

const displaySchoolValue = async (schoolName) => {
  const value = await getAsync(schoolName);
  console.log(value);
};

(async () => {
  await displaySchoolValue('Holberton');
  setNewSchool('HolbertonSanFrancisco', '100');
  await displaySchoolValue('HolbertonSanFrancisco');
})();
