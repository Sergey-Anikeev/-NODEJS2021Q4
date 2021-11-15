Private folder for NodeJS 2021 Q4, Sergey-Anikeev.

How to install

    Clone repository from https://github.com/Sergey-Anikeev/NODEJS2021Q4
    Open ./cipher directory in branch "cipher"
    Use the application from terminal

How to use

For enter use index.js file. The application works with next options: -c, --config | config for ciphers Config is a string with pattern {XY(-)}n, where: X is a cipher mark: C is for Caesar cipher (with shift 1) A is for Atbash cipher R is for ROT-8 cipher Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher) 1 is for encoding 0 is for decoding -i, --input: a path to input file (make sure it's main directory) -o, --output: a path to output file (make sure it's main directory)

Config option is required. For example -c A-R0-R1-R1, if you want you can use input.txt and output.txt files, or you can create yourself .txt files. Please don't use flags twice, it will be an Error:) Have fun!
Examples:

input: This is secret. Message about "" symbol! command line: node index.js -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt" output: Myxn xn nbdobm. Tbnnfzb ferlm "" nhteru!