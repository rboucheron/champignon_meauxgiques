import express from 'express';

import bodyParser from 'body-parser';
import cors from 'cors';
import { readQCM } from './controllers/qcm_controllers';


const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

app.get('/api/qcm', readQCM); 

app.listen(port, () => {
    console.log(`Le serveur est lancé à l'adresse http://localhost:${port}`);
});