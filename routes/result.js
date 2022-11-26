const express = require("express");
// const fetchResult = require("../middleware/fetchresult");
const router = express.Router();
const formNo = require("../models/formno")

router.get("/", async (req, res) => {
  const formno = req.header('formno');
    try {
      const result = await formNo.find({ FormNo: formno });
      res.json(result);
    } catch (error) {
      res.status(500).send("Error: Interal Server Occured");
    }
  });
module.exports = router;