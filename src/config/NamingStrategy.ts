/* eslint-disable */
const NamingStrategy = require('typeorm-model-generator/dist/src/NamingStrategy');

const fileName = (fileName) => {
    // Add entity suffix for analysed in swagger plugin
  let camel = fileName.replace(/([-_]\w)/g, (g) => g[1].toUpperCase())
  camel = camel.charAt(0).toUpperCase() + camel.slice(1)
  return `${camel}.entity`
};

module.exports = {
    fileName,
};
