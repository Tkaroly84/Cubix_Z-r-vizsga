const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './app.js',
    mode: 'development',
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: './index.html', to: DIST_DIR },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource', // Ez a fontos rész: asset/resource
                generator: {
                    filename: 'images/[name][ext]',
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: DIST_DIR,
        },
    },
};
