exports.upload = (req, res) => {
  if(!req.file) {
      return res.status(400).send();
  }
  return res.status(200).send({id: req.file.filename})
};