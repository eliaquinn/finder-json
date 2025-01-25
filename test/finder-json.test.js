const fjson = require('../src/index');
const { json } = require('./mock')

test('filtrar o json', () => {
    const scanKey = ["numero"]

    expect(fjson.scanJson(json, scanKey, {})).toEqual({
        numero: 2220
    });
});