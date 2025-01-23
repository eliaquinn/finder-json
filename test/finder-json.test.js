const fjson = require('../src/index');

const json = {
    "id": 1010,
    "body": {
        "id":333,
        "form": "a2wf13se5fe1-asdfeef1w6-asfe15f6ed",
        "data": "2023-09-26",
        "email": "fulano@fulano.com",
        "valor": "admin",
        "historia":"essa e primeira historia...",
    },
    "user_images": {
        "foto_perfil1": ["image_example1.jpg"],
        "foto_perfil2": ["image_example2.jpg"],
        "foto_perfil3": ["image_example3.jpg"],
        "foto_perfil4": ["image_example4.jpg"],
    },
    "title": "Perfil do Facebook",
    "admin": false,
    "business": true,
    "rating": 4.6,
    "hash":[10,20,25],
    "perfil": {
        "enderecos":{
            "rua":"test 1",
            "numero": 2220,
            "cidade":"Manaus",
            "uf":"am",
            "id":555
        },
        "escolas":{
            "todas_unidades": [
                {
                    "escola":"fulano 1"
                },
                {
                    "escola":"fulano 2"
                },
                {
                    "escola":"fulano 3"
                },
                {
                    "escola":"fulano 4"
                },
                {
                    "escola":"fulano 5"
                },
            ],
            "ano":"2023",
            "livros":{
                "id": 667,
                "ciencia":"ciencia todo dia",
                "historia":"era uma vez um menino...",
                "matematica": ["funções","artimetica","geometria"],
                "geografia": {
                    "id":"id geografia",
                    "planos":"artigo referente a planos de...",
                    "solos":"varios tipos de lato solos..."
                }
            }
        }
    }
}
const scanKey = ["numero"]

test('aqui vai a label', () => {
  expect(fjson.scanJson(json, scanKey, {})).toEqual({
    numero: 2220
  });
});