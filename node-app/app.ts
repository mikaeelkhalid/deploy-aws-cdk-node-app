import express from 'express';
import { Server } from 'http';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  try {
    return console.log('Server listening on port 3000');
  } catch (error) {
    return console.error(error);
  }
});
