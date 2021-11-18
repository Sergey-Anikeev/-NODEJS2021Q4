const isFlagsValid = (flag, flagFull) => {
	const flagIndex = process.argv.indexOf(flag);
	const fullFlagIndex = process.argv.indexOf(flagFull);
	if (flagIndex > 0 && fullFlagIndex > 0) {
		process.stderr.write(`\x1b[31mError: option ${flag} and ${flagFull} is duplicated\x1b[0m`);
		process.exit(2);
	}
	if (flagIndex != process.argv.lastIndexOf(flag)) {
		process.stderr.write(`\x1b[31mError: option ${flag} is duplicated\x1b[0m`);
		process.exit(2);
	}
	if (fullFlagIndex != process.argv.lastIndexOf(flagFull)) {
		process.stderr.write(`\x1b[31mError: option ${flagFull} is duplicated\x1b[0m`);
		process.exit(2);
	}
}

module.exports = isFlagsValid;