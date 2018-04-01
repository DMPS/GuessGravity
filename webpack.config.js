const path = require('path')

module.exports = {
    entry: './src/balls.js',
    output: {
        filename: './bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.(s*)css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};