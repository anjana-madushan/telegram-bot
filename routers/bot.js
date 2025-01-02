import { checkMessage } from "../controllers/bot.js";
import express from 'express';

const router = express.Router();

router.post('/', checkMessage);

export default router;

