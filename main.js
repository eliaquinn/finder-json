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

const jsonHandler = {
    res: {},
    scanJson(json, targetArray, resultObject) {
        if (typeof json !== "object") return "Tipo de estrutura não é json"
    
        for (let key in json) {
            if (typeof json[key] === "object") {
                this.scanJson(json[key], targetArray, resultObject)
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
    },

    filterAdvancedJson (jsonData, resultData, search) {
        for(let key in jsonData) {
            if(typeof jsonData[key] === "object") {
                if(key.includes(search)) {
                    this.res[key] = jsonData[key]
                } else {
                    this.filterAdvancedJson(jsonData[key],this.res, search)
                }
            } else {
                if(key.includes(search)) {
                    if(this.res.hasOwnProperty(search)) {
                        this.res[key + `_${count++}`] = jsonData[key]
                    }
                    this.res[key] = jsonData[key]
                }
            }
        }
    
        return this.res
    }
}

const scanKey = ["numero","foto_perfil4"]
const filterKey = "escola"
const result = {}
let count = 0
let type = "filter"

switch(type) {
    case "filter":
        console.log(jsonHandler.filterAdvancedJson(json, result, filterKey))
        break;
    case "scan":
        console.log(jsonHandler.scanJson(json, scanKey, result))
        break;
    default:
        console.log(jsonHandler.scanJson(json, scanKey, result))
        break;
}