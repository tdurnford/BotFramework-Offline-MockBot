module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    browsers: ['last 2 versions']
                },
                modules: 'commonjs'
            }
        ],
        '@babel/preset-typescript'
    ],
    sourceMaps: 'inline',
    plugins: [
        '@babel/proposal-class-properties'
    ]
};
