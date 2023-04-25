const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());
const whitelist=[
  'http://localhost:8080',
  'https://myapp.co',
  'http://localhost:8081',
];
const options={
  origin:(origin,callback)=>{
    if(whitelist.includes(origin)||!origin){
      callback(null,true);
    }else{
      callback(new Error('No permitido'));
    }
  }
}
app.use(cors());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
