/**
 * Author: Kwenziwa Lizwi Khanyile
 * Github: @kwenziwa
 * Date Created: February 1, 2024
 */
import redis from 'redis';

const Newclient = redis.createClient();

Newclient.on('ready', () =>
  console.log('Redis client connected to the server')
).on('error', (err) =>
  console.log(`Redis client not connected to the server: ${err}`)
);

const hash = 'HolbertonSchools';

const fields = {
  Portland: 50,
  Seattle: 80,
  'New York': 20,
  Bogota: 20,
  Cali: 40,
  Paris: 2
};

for (const [k, v] of Object.entries(fields)) {
  Newclient.hset(hash, k, v, redis.print);
}

Newclient.hgetall(hash, (_, reply) => {
  console.log(reply);
});
