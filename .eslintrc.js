module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "quotes": [0, 'double'],// 不检查双引号
        "semi": 0, //不检查分号
        "comma-dangle": [0],//不检查逗号
        "indent": [0],
        "space-before-function-paren": ["error", "always"],
        "no-multiple-empty-lines": [0],
        "no-trailing-spaces": [0]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
