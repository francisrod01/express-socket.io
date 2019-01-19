exports.index = (req, res) => {
  console.log("Controller answers with [ok].");
  socketIO.emit('message', 'Message sent. :)');
  return res.json('ok');
};
