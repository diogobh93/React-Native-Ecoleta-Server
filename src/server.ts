import express from 'express';
import path from 'path';
import routes from './routes'
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..','uploads')));

app.listen(3333);


// Para rodar o localhost digite: npm run dev 
// o 'dev' esta configurado no package.json
//npm install express
//npm install ts-node -D
//npm install typescript -D
//npm install ts-node-dev -D
//npm install cors
