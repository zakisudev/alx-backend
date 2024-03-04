/**
 * 5-subscriber module
 */
import redis from 'redis';

const Newclient = redis.createClient();
const subscriber = Newclient.duplicate();

Newclient.on('ready', () =>
  console.log('Redis client connected to the server')
).on('error', (err) =>
  console.log(`Redis client not connected to the server: ${err}`)
);

subscriber.subscribe('holberton school channel');

subscriber.on('message', (_, message) => {
  console.log(message);
  if (message === 'KILL_SERVER') {
    subscriber.unsubscribe('holberton school channel');
    process.exit(0);
  }
});
