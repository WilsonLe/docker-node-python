const app = require('express')();
const execute = require('./execute');

app.get('/', async (req, res) => {
	const data = await execute('src/hello.py');
	res.send(data);
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on port ${port}`));
