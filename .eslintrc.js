module.exports = {
  //指定代码运行环境
  env: {
    browser: true,
    es2021: true
  },
  //扩展其他的ESLint配置
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'prettier', 'plugin:storybook/recommended', 'plugin:storybook/recommended'],
  //配置解析器选项
  parserOptions: {
    ecmaVersion: 12, //对应ES2021
    sourceType: 'module' //使用ES6语法
  },
  //自定义ESLint规则
  rules: {
    'vue/multi-word-component-names': 'off'
  }
};
