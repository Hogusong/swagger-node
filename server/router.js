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

router.post('/cats', cors(), (req, res) => {
  try {
    const cat = Object.assign({}, req.body);
    cats[uuid()] = cat;
    res.status(200).json(cat);
  } catch(e) {
    res.status(400).send(JSON.stringify({ error: "Problem with posted data."}))
  }
});

router.get('/cats/:id', cors(), (req, res) => {
  const cat = cats[req.params.id];
  if (cat) res.status(200).json(cat);
  else res.status(500).json({ error: "Cannot find the cat here."})
});

module.exports = router;