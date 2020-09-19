const HTTP_CODE = require('http-status-codes');

const getVariant = async (req, res) => {
  try {
    return res.set(HTTP_CODE.OK).json(req.params);
  } catch (err) {
    return res.set(HTTP_CODE.INTERNAL_SERVER_ERROR);
  }
};

module.exports = getVariant;
