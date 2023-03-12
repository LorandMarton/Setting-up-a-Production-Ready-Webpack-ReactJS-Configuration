const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isStats = process.env.STATS === 'true';
const mode = process.env.ANALYZE ?? 'disabled';

const prodConfig = {
    optimization: {
        minimize: false,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                parallel: 4,
            })
        ],
        splitChunks: false
    },
    devtool: false,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ]
            },
            {
                test: /\.s[ac]ss$/i, // https://webpack.js.org/loaders/sass-loader/
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
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
        // https://webpack.js.org/plugins/mini-css-extract-plugin/#advanced-configuration-example
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: mode,
            generateStatsFile: isStats
        }),
        new ESLintPlugin({ failOnError: true }),
    ],
};

module.exports = () => {
    console.log('ProdConfig config loaded');
    return merge(commonConfig, prodConfig);
};
