/**
 * Redis client
 */
import redis from 'redis';

const Newclient = redis.createClient();

Newclient.on('ready', () =>
  console.log('Redis client connected to the server')
).on('error', (err) =>
  console.log(`Redis client not connected to the server: ${err}`)
);
