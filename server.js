const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Pusher = require('pusher');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pusher = new Pusher({
  appId: '1969741',
  key: '219e140cf2063fbd9171',
  secret: '832c0e57c2d17de102ed',
  cluster: 'ap2',
  useTLS: true
});

app.post('/message', (req, res) => {
  const { text } = req.body;
  pusher.trigger('ctf-chat', 'message', { text });
  res.send({ success: true });
});

app.get('/', (req, res) => {
  res.send("🚀 CTF Chat Server is Running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
