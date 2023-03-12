const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isStats = process.env.STATS === 'true';
const mode = process.env.ANALYZE ?? 'disabled';

// https://webpack.js.org/plugins/split-chunks-plugin/#splitchunksname
const uniqueName = (module, chunks, cacheGroupKey) => {
    const allChunksNames = chunks.map((item) => item.name).join('~');
    return `${cacheGroupKey}-${allChunksNames}`;
};

const prodConfig = {
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                parallel: 4,
            })
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            name: false,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                    name: 'defaultVendors',

                },
                asyncVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    reuseExistingChunk: true,
                    chunks: 'async',
                    name: (module, chunks, cacheGroupKey) =>
                        uniqueName(module, chunks, cacheGroupKey),
                },
                default: {
                    priority: -20,
                    reuseExistingChunk: true,
                    minChunks: 2,
                    name: 'default',
                },
            },
        },
        chunkIds: 'deterministic',
        runtimeChunk: 'single',
        moduleIds: 'deterministic',
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
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].[contenthash].chunk.css',
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
