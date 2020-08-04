import * as express from 'express';
import apiRouter from './db';

const app = express();

app.use(express.static('public'));
app.use(express.json())  //replaces body parser 
app.use('/api', apiRouter); // path to db folder thats holding all my routes 

const port = 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
