const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/assets/index.html',
            filename: 'index.html',
        }),
        new ESLintPlugin({ failOnError: true }),
    ],
};

module.exports = () => {
    return config;
};
