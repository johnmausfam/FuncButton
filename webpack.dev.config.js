var path = require('path');
var webpack = require('webpack');

var config = {
    entry: {
        bundle:[
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3001',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, 'example/index.jsx')
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.SourceMapDevToolPlugin(),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(require("./package.json").version)
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
    ],
    output: {
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/, 
                loaders: ['babel-loader'],
                include: [path.join(__dirname, 'src'),path.join(__dirname, 'example')],
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {   test: /\.css$/,
                loader: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js",".json",".jsx"]
    }
};

module.exports = config;