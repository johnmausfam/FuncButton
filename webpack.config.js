const path = require('path');
const webpack = require('webpack');

var config = {
    entry: {
        'FuncButton':path.resolve(__dirname, 'src/index.jsx')
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].min.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/, 
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.css$/,
                loaders: ['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify("production")
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    resolve: {
        extensions: [".js",".json",".jsx"]
    }
};

module.exports = config;