const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name]-init.js',
        chunkFilename: '[name]-async.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                // https://webpack.js.org/guides/asset-management/#loading-images
                // https://webpack.js.org/guides/asset-management/#loading-fonts
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|jpeg|gif|otf)$/i,
                type: 'asset',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/assets/index.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
    ],
};
