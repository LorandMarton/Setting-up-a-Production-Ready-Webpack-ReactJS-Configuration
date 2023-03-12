const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const commonConfig = require('./webpack.common.js');

const devConfig = {
    devServer: {
        port: 3000,
        hot: true,
    },
    devtool: 'eval-cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i, // https://webpack.js.org/loaders/sass-loader/
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader', // https://webpack.js.org/loaders/css-loader/
                        options: {
                            modules: {
                                mode: 'icss'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                    }
                ],
            },
        ],
    },
    plugins: [
        new HotModuleReplacementPlugin({}),
        new ReactRefreshWebpackPlugin(),
        new ESLintPlugin({ failOnError: false }),
    ],
};

module.exports = () => {
    console.log('DevConfig config loaded');
    return merge(commonConfig, devConfig);
};
