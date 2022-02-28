const { Kafka } = require('kafkajs');
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017'; //coincidir con el servicio de mongo
const client = new MongoClient(url);

// Database Name
const dbName = 'consumer_report_service';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka1:9092', 'kafka2:9092']
});

const consumer = kafka.consumer({ groupId: 'test-group' });

async const consumerReporting = async () => {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to Mongo server');
  const db = client.db(dbName);

 // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
      const collection = topic.split('-')[0];
      db.collection.insertOne(message.value);
    },
  });
  // the following code examples can be pasted here...
  return 'done.';
}

consumerReporting()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
