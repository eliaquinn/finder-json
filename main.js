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
        "escolaridade":{
            "escola":"manoel gomes",
            "ano":"2023",
            "livros":{
                "id": 667,
                "ciencia":"ciencia todo dia",
                "historia":"era uma vez um menino...",
                "matematica": ["funções","artimetica","geometria"],
                "geografia": {
                    "planos":"artigo referente a planos de...",
                    "solos":"varios tipos de lato solos..."
                }
            }
        }
    }
}

const searchKey = ["id"]
const result = {}
let count = 0

function scanJson(json, targetArray, resultObject) {
    if (typeof json !== "object") return "Tipo de estrutura não é json"

    for (let key in json) {
        if (typeof json[key] === "object") {
            scanJson(json[key], targetArray, resultObject)
        }

        let dataExists = targetArray.filter(k => k === key)[0] ? targetArray.filter(k => k === key)[0] : false

        if (dataExists) {
            if(resultObject.hasOwnProperty(key)) {
                resultObject[targetArray.filter(k => k === key)[0] + `_${count++}`] = json[key]
            } else {
                resultObject[targetArray.filter(k => k === key)[0]] = json[key]
            }
        }
    }

    return resultObject
}

const resultJson = scanJson(json, searchKey, result)

console.log(resultJson)

