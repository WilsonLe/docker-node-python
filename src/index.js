const app = require('express')();
const execute = require('./execute');

app.get('/', (req, res) => {
	const data = execute('src/hello.py');
	console.log(JSON.stringify(data));
	res.send(data);
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on port ${port}`));
