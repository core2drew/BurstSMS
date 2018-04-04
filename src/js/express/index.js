const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')

app.use(express.static('dist'))

app.post('/sendsms', (req, res) => {
  let to = req.query.to
  let message = req.query.message

  axios({
    url: 'https://api.transmitsms.com/send-sms.json',
    method: 'post',
    params: {
      message,
      to
    },
    auth: {
      username: 'cb5fd450acf95e69a47a8352c84288ca',
      password: 'burstsmsTEST'
    },
  })
  .then(function (response) {
    res.send(response)
  })
  .catch(function (error) {
    res.send(error)
  });
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))