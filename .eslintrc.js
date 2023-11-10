module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'error',
      {
        useTabs: false, // 使用tab缩进还是使用空格缩进
        tabWidth: 2, // tab是空格的情况下，是几个空格
        printWidth: 80, // 当前字符的长度
        singleQuote: true, // 使用单引号还是双引号
        trailingComma: 'all', // 在多行输入的末尾是否添加逗号
        semi: false, // 语句末尾是否要加分号
      },
    ],
  },
}
