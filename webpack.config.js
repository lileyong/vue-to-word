const { resolve } = require('path')

module.exports = function () {
    return {
        mode: 'production',
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
