const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DefinePlugin, HotModuleReplacementPlugin, NamedModulesPlugin } = require('webpack');
const { join, resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

require('dotenv').config();

const PUBLIC_URL = process.env.PUBLIC_URL || '/';

module.exports = {
    entry: './src/index.ts',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.[jt]s$/,
                include: [
                    join(__dirname, 'src'),
                    join(__dirname, 'node_modules/botbuilder-core/lib')
                ],
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new NamedModulesPlugin(),
        new HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            { from: resolve(__dirname, 'index.html'), to: '' },
            { from: resolve(__dirname, 'src/assets'), to: 'assets' },
            { from: resolve(__dirname, 'src/public'), to: 'public' }
        ]),
        new DefinePlugin({
            'process.env.PUBLIC_URL': JSON.stringify(PUBLIC_URL)
        })
    ],
    resolve: {
        extensions: ['.css', '.js', '.ts']
    },
    output: {
        filename: 'index.js',
        path: resolve(__dirname, 'dist')
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
