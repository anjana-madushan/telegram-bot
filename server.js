import express from 'express';
import bodyParser from 'body-parser';
import router from './routers/bot.js';

const app = express();

app.use(bodyParser.json());
app.use('/genie', router);

app.listen(3000, () => {
  console.log(`Server is listening to Port 3000`);
})