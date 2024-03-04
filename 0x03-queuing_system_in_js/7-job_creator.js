/**
 * Job creator for multiple jobs
 */
import kue from 'kue';

const jobs = [
  {
    phoneNumber: '250250',
    message: 'Your verification code is: 1234',
  },
  {
    phoneNumber: '250251',
    message: 'Your verification code is: 1235',
  },
  {
    phoneNumber: '250252',
    message: 'Your verification code is: 1236',
  },
  {
    phoneNumber: '250253',
    message: 'Your verification code is: 1237',
  },
  {
    phoneNumber: '250254',
    message: 'Your verification code is: 1238',
  },
  {
    phoneNumber: '250255',
    message: 'Your verification code is: 1239',
  },
  {
    phoneNumber: '250256',
    message: 'Your verification code is: 1231',
  },
  {
    phoneNumber: '250257',
    message: 'Your verification code is: 1232',
  },
  {
    phoneNumber: '250258',
    message: 'Your verification code is: 1233',
  },
  {
    phoneNumber: '250259',
    message: 'Your verification code is: 1240',
  },
  {
    phoneNumber: '250260',
    message: 'Your verification code is: 1241',
  },
];

const queue = kue.createQueue();

jobs.forEach((x) => {
  const job = queue.create('push_notification_code_2', x).save((err) => {
    if (!err) console.log(`Notification job created: ${job.id}`);
  });

  job.on('complete', () => {
    console.log(`Notification job ${job.id} completed`);
  });

  job.on('failed', (err) => {
    console.log(`Notification job ${job.id} failed: ${err}`);
  });

  job.on('progress', (progress) => {
    console.log(`Notification job ${job.id} ${progress}% complete`);
  });
});
