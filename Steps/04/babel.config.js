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

    ],
    plugins: [],
};

module.exports = api => {
    api.cache.using(() => process.env.NODE_ENV);

    return babelConfig;
};
