import express from 'express';
const app = express()

const port = 8800
app.listen(port, ()=>{
   console.log('listening on port ' + port + ' and connecting to backend. ')
})