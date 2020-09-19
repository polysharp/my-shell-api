const HTTP_CODE = require('http-status-codes');

const getVariants = async (req, res) => {
  try {
    return res.set(HTTP_CODE.OK).json({
      route: 'getVariants'
    });
  } catch (err) {
    return res.set(HTTP_CODE.INTERNAL_SERVER_ERROR);
  }
};

module.exports = getVariants;