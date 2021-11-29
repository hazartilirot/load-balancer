const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('I have been hit')
})

const port = process.env.PORT ?? 3000

app.listen(port, () => console.log(`Server listening on ${port}`))