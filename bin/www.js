const mongoose = require('mongoose')
const app = require('../app')

const sPort = 8080

const mongoAtlasUri = 'mongodb+srv://shaharyig:shyi9636963@projects-ple4w.mongodb.net/online_shop?retryWrites=true&w=majority'

mongoose
  .connect(mongoAtlasUri)
  .then(() => {
    console.log('Connected to DB successfuly')
    app.listen(sPort, function () {
      console.log('Server running on port ' + sPort)
    })
  })
  .catch((err) => {
    console.log(mongoAtlasUri)
    console.log('Error while trying to connect DB')
  })
