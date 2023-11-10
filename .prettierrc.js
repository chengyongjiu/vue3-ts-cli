/** @type {import("prettier").Config} */
const Config = {
  useTabs: false, // 使用tab缩进还是使用空格缩进
  tabWidth: 2, // tab是空格的情况下，是几个空格
  printWidth: 80, // 当前字符的长度
  singleQuote: true, // 使用单引号还是双引号
  trailingComma: 'all', // 在多行输入的末尾是否添加逗号
  semi: false, // 语句末尾是否要加分号
}

module.exports = Config
