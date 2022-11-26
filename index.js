const connectToMongo= require('./db');
var cors = require('cors')
const express = require('express')
connectToMongo();

const app = express()
const PORT = process.env.PORT || 5000
if ( process.env.NODE_ENV == "production"){

  app.use(express.static("ioe/build"));

}

app.use(cors())
app.use(express.json())
app.use('/api/result',require('./routes/result'))
app.listen(PORT, () => {
  console.log(`bNotes listening on port ${PORT}`)
})