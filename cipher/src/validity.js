const fs = require('fs');
const path = require('path');
const isFlagsValid = require('./isFlagsValid');

const validity = (config, inputFile, outputFile) => {
	if (inputFile) {
		const filePath = path.resolve(__dirname, '../', inputFile.trim());
		if (!fs.existsSync(filePath)) {
			process.stderr.write(`\x1b[31mError: input file ${inputFile.trim()} not found at ${filePath}\x1b[0m`);
			process.exit(2);
		}
	} 
	if (outputFile) {
		const filePath = path.resolve(__dirname, '../', outputFile.trim());
		if (!fs.existsSync(filePath)) {
			process.stderr.write(`\x1b[31mError: output file ${outputFile.trim()} not found at ${filePath}\x1b[0m`);
			process.exit(2);
		}
	}
	isFlagsValid('-c', '--config');
	isFlagsValid('-i', '--input');
  	isFlagsValid('-o', '--output');

	const configArray = config.split('-');
	const regExConfig = new RegExp(/[ACR][01]?-/g);
	const matchArray = config.match(regExConfig);
	if (configArray.length != matchArray.length + 1) {
		process.stderr.write(`\x1b[31mError: wrong config.${config}\x1b[0m`);
		process.exit(2);
	}
	const regEx1 = new RegExp(/^[CR][01]$/);
	const regEx2 = new RegExp(/^A$/);
	configArray.forEach((el) => {
		if (el.trim().length > 2) {
			process.stderr.write(`\x1b[31mError: wrong config.${config}\x1b[0m`);
			process.exit(2);
		}
		if (!regEx1.test(el.trim())) {
			if (!regEx2.test(el.trim())) {
				process.stderr.write(`\x1b[31mError: wrong config. This part "${el.trim()}" of "${config.trim()}"\x1b[0m`);
				process.exit(2);
			}
		}
	})
	return true;
}
module.exports = validity;