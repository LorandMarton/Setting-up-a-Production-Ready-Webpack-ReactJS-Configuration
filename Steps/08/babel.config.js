const babelConfig = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: ['> 0.25%', 'not dead'],
                modules: false,
                useBuiltIns: 'usage',
                corejs: { 'version': 3.28 },
                debug: false,
            }
        ],
        '@babel/preset-react',
    ],
    plugins: [],
};

module.exports = api => {
    api.cache.using(() => process.env.NODE_ENV);
    babelConfig.plugins = [];
    api.env('development') && babelConfig.plugins.push('react-refresh/babel');
    return babelConfig;
};
