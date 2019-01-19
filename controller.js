exports.index = (req, res) => {
  console.log("Controller answers with [ok].");
  return res.json('ok');
};
