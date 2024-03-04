/**
 * 5. Node Redis client publisher
 */
import redis from 'redis';

const Newclient = redis.createClient();

Newclient.on('error', (err) =>
  console.log(`Redis client not connected to the server: ${err}`)
).on('ready', () => console.log('Redis client connected to the server'));

const publishMessage = (message, time) => {
  setTimeout(() => {
    console.log(`About to send ${message}`);
    Newclient.publish('holberton school channel', message);
  }, time);
};

publishMessage('Holberton Student #1 starts course', 100);
publishMessage('Holberton Student #2 starts course', 200);
publishMessage('KILL_SERVER', 300);
publishMessage('Holberton Student #3 starts course', 400);
