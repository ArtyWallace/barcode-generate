const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const barcodeCreator = require('./creator');

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/create', (req, res) => {
  const barcode = barcodeCreator(req.body.value).toDataURL();
  res.json({ barcode });
});

app.listen(4000, () => 'Server has been started..');
