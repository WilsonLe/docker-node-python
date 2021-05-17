const os = require('os');
const { spawn } = require('child_process');

const execute = (filename, args = []) => {
	console.log(`executing ${filename}`);
	let pyExec = '';
	if (os.platform() == 'win32') pyExec = `venv\\Scripts\\python.exe`;
	if (os.platform() == 'darwin') pyExec = `venv/bin/python`;
	if (os.platform() == 'linux') pyExec = `venv/bin/python`;

	const pyProcess = spawn(pyExec, [filename, ...args]);
	let output = '';
	console.log('process spawned');
	pyProcess.stdout.on('data', data => {
		output = data.toString();
	});

	pyProcess.stderr.on('data', data => {
		console.log(`error in executing ${filename}:`);
		console.log(`${data.toString()}`);
		output = '';
	});
	return output;
};
module.exports = execute;
