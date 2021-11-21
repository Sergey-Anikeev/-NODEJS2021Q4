const fs = require('fs');
const path = require('path');

const isValidOptions = require('./src/validity');
const readableStream = require('./src/myReadableClassName');
const transformStream = require('./src/transform');
const writableStream = require('./src/myWriteableClassName');

const [optionsFlag, optionsStr, 
  inputFlag, inputFileName, 
  outputFlag, outputFileName] = process.argv.slice(2);

const isValid = isValidOptions(optionsStr, inputFileName, outputFileName);

if (isValid) {
    let readStream
    if (inputFileName) {
      readStream = new readableStream(path.resolve(__dirname, inputFileName.trim()), { highWaterMark: 1 });
    } else {
      process.stdout.write('\x1b[35m Please enter your message, to exit press CTRL+C: \x1b[0m')
      readStream = process.stdin;
    }

    let writeStream, outputPath;

    if (outputFileName) { 
      outputPath = path.resolve(__dirname, outputFileName.trim());
      writeStream = new writableStream(outputPath);
    } else {
      writeStream = process.stdout;
    }
    optionsStr.trim().split('-').reduce((previous, current) => {
      return previous.pipe(new transformStream(current, outputPath));
    }, readStream).pipe(writeStream)
}