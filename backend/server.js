```js
const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());

app.post('/alert', (req, res) => {
  const alert = `${new Date().toISOString()} - ${JSON.stringify(req.body)}\n`;
  fs.appendFileSync('../alerts/log.txt', alert);
  res.send('Alert received');
});

app.listen(4000, () => console.log('Alert API running on port 4000'));
```
