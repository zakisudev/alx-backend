/**
 * Job creator
 */

import kue from 'kue';

const queue = kue.createQueue();
const JobData = {
  phoneNumber: '250250',
  message: 'Job verification message'
};

const job = queue.create('push_notification_code', JobData).save((err) => {
  if (!err) console.log(`Notification job created: ${job.id}`);
});

job.on('complete', () => {
  console.log('Notification job completed');
});

job.on('failed', () => {
  console.log('Notification job failed');
});
