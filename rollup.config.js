const typescript = require('@rollup/plugin-typescript')

module.exports = {
    input: 'src/main.ts',
    output: {
        dir: 'dist',
        format: 'esm'
    },
    plugins: [
        typescript()
    ]
}
