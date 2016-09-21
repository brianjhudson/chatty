const express = require( "express");
const { json } = require( "body-parser" );

const app = express();
const port = 5000;

app.use( json() );

const messages = [
  {
    _id: 1
    , content: "Hi there"
  }
];

app.get('/api/messages', ( req, res ) => {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).json( messages );
  // res.json(messages)
});





app.listen( port, () => {
  console.log(`Listening on port ${ port }`);
})
