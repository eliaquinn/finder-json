const fJson = {
  res: {},
  scanJson(json, targetArray, resultObject) {
    if (typeof json !== "object") return "Tipo de estrutura não é json"

    for (let key in json) {
      if (typeof json[key] === "object") {
        this.scanJson(json[key], targetArray, resultObject)
      }

      let dataExists = targetArray.filter(k => k === key)[0] ? targetArray.filter(k => k === key)[0] : false

      if (dataExists) {
        if (resultObject.hasOwnProperty(key)) {
          resultObject[targetArray.filter(k => k === key)[0] + `_${count++}`] = json[key]
        } else {
          resultObject[targetArray.filter(k => k === key)[0]] = json[key]
        }
      }
    }

    return resultObject
  },

  filterAdvancedJson(jsonData, resultData, search) {
    for (let key in jsonData) {
      if (typeof jsonData[key] === "object") {
        if (key.includes(search)) {
          this.res[key] = jsonData[key]
        } else {
          this.filterAdvancedJson(jsonData[key], this.res, search)
        }
      } else {
        if (key.includes(search)) {
          if (this.res.hasOwnProperty(search)) {
            this.res[key + `_${count++}`] = jsonData[key]
          }
          this.res[key] = jsonData[key]
        }
      }
    }

    return this.res
  }
}

module.exports = fJson;