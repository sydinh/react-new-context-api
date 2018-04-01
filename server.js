const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 4000;
const dirServe = 'build';

app.use('/', express.static(`${__dirname}/${dirServe}`));

// express will serve up index.html if it doesn't recognize the route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, `${dirServe}`, 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}, Ctrl+C to stop`));
