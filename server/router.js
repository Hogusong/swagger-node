import express from 'express';
import { v4 as uuid } from 'uuid';
import cors from 'cors';

const router = express.Router();

const cats = {};
cats[uuid()] = { genus: "female", name: "Cosmo", inHungry: false, lastFedData: "01/30/2020" };
cats[uuid()] = { genus: "male", name: "Hanul", inHungry: true, lastFedData: "01/31/2020" };

router.get('/cats', cors(), (req, res) => {
  res.json(cats);
});

module.exports = router;