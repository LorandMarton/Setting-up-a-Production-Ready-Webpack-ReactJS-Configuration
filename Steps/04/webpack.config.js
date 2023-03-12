const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

const config = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 3000,
        hot: true,
    },
    devtool: 'eval-cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    plugins: [
        new HotModuleReplacementPlugin({}),
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
