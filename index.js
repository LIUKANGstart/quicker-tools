// 这是包的入口文件
const date = require("./src/dateFormat");

// 向外暴露需要的成员
module.exports = {
  ...date,
};
