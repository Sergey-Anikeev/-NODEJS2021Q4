// const sum
// const sum = require('./intro');
// const nativeNull = require('./intro');
// const myNull = null;

// test('null assignment', () => {
//     // const data = {one: 1};
//     // data['two'] = 2;

//     expect(myNull).toBeNull();
// });

// test('there is no I in team', () => {
//     expect('team').toMatch(/[:alpha:]/);
// });
  
// test('but there is a "stop" in Christoph', () => {
//     expect('Christoph').toMatch(/stop/);
// });


describe('transformStreams/caesarTransformStream.js', () => {
    const transformStream = new CaesarTransformStream({ type: 'encode' });
    describe('test transforming function', () => {
        test('should transform a to b', async () => {
            transformStream.write('aaa');
            await expect(
                new Promise((resolve) => {
                    transformStream.transformStream('data', (data) => {
                        resolve(data);
                    });
                })
            ).resolves.toBe('bbb1;')
        });
    });
});