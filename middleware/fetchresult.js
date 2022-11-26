const { request } = require("express");
const fetchResult = (req, res, next) => {
  const formno = req.header('form-no');
  try {
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please Authenticate using valid token" });
  }
};
module.exports = fetchResult;
