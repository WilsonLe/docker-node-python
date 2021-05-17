const express = require('express');
const app = express();
const execute = require('./execute');

app.use(express.json());

app.get('/', async (req, res) => {
	const { query } = req.body;
	const data = JSON.parse(await execute('src/translate.py', [query]));
	res.send(data);
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on port ${port}`));
