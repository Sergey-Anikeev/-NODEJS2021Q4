class CaesarTransformStream extends Transform {
    constructor(options) {
        super(options);
        this.type = options.type;
        this.shift = 1;
    }

    _transform(chunk, encoding, callback) {
        const shift = this.type === 'encode' ? this.shift : -this.shift;
        const data = chunk.toString().trim().split('');
        const result = data
            .map((x) => {
                if (x.match(/[a-z]/i)) {
                    const index = lowerCaseAlphabet.indexOf(x);
                    if (index !== -1) {
                        return lowerCaseAlphabet[findALetter(index, shift)];
                    }
                }
                if (x.match(/[A-Z]/i)) {
                    const index = upperCaseAlphabet.indexOf(x);
                    if (index !== -1) {
                        return upperCaseAlphabet[findALetter(index, shift)];
                    }
                }
                return x;
            })
            .join('');
        callback(null, `${result}\n`);
    }
}