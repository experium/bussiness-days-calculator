const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        'app': './index.js'
    },
    resolve: {
        extensions: ['.js'],
        modules: ['src', 'node_modules']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        library: 'ExperiumDeadlineCalculator',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ],
    },
    externals: /^[^./]/i,
    plugins: [
        new CleanWebpackPlugin('dist', {
            root: path.resolve(__dirname, ''),
            verbose: true,
            dry: false
        })
    ]
};
