import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routers/bot.js';


dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use('/genie', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening to Port 3000`);
})