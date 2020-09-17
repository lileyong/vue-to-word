const { resolve } = require('path')

module.exports = function () {
    return {
        mode: 'production',
        output: {
            path: resolve(__dirname, 'dist'),
            filename: 'main.js',
            libraryTarget: 'commonjs2',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader',
                    include: resolve(__dirname, 'src'),
                },
            ],
        },
    }
}
