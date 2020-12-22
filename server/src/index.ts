import express from 'express';
import { router } from './routes/routes';
import path from 'path';

const app = express();
const PORT = 3001; 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../../client/build',)));
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	next();
});

app.use('/', router);

app.listen(process.env.PORT || PORT, () => { console.log(`Server is listening on port ${PORT}`) });
