const json = {
    "id": 1010,
    "body": {
        "form": "a2wf13se5fe1-asdfeef1w6-asfe15f6ed",
        "data": "2023-09-26",
        "email": "fulano@fulano.com",
        "valor": "admin"
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
    "rating": 4.6
}

const searchKey = ["id", "title", "rating", "foto_perfil1", "form"]
const result = {}

function scanJson(json, targetArray, resultObject) {
    if (typeof json !== "object") return "Tipo de estrutura não é json"

    for (let key in json) {
        if (typeof json[key] === "object") {
            scanJson(json[key], targetArray, resultObject)
        }

        let dataExists = targetArray.filter(k => k === key)[0] ? targetArray.filter(k => k === key)[0] : false

        if (dataExists) {
            resultObject[targetArray.filter(k => k === key)[0]] = json[key]
        }

        // if (typeof json[key] === "string") {
        //     let dataExists = targetArray.filter(k => k === key)[0] ? targetArray.filter(k => k === key)[0] : false

        //     if (dataExists && json[key].length > 0 && json[key] !== " ") {
        //         resultObject[targetArray.filter(k => k === key)[0]] = json[key]
        //     }
        // } else if (typeof json[key] === "boolean") {
        //     let dataExists = targetArray.filter(k => k === key)[0] ? targetArray.filter(k => k === key)[0] : false

        //     if (dataExists) {
        //         resultObject[targetArray.filter(k => k === key)[0]] = json[key]
        //     }
        // } else if (typeof json[key] === "number") {
        //     let dataExists = targetArray.filter(k => k === key)[0] ? targetArray.filter(k => k === key)[0] : false

        //     if (dataExists) {
        //         resultObject[targetArray.filter(k => k === key)[0]] = json[key]
        //     }
        // } else if (typeof json[key] === "object") {
        //     scanJson(json[key], targetArray, resultObject)
        // }
    }

    return resultObject
}

const resultData = scanJson(json, searchKey, result)

console.log(resultData)

