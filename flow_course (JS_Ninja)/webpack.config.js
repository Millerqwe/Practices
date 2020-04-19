const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'components', 'App.js'),
    output: {
        path: path.resolve(__dirname, 'dict'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            helper: path.resolve(__dirname, 'src', 'helper'),
            actions: path.resolve(__dirname, 'src', 'store', 'actions'),
            store: path.resolve(__dirname, 'src', 'store'),
            middlewares: path.resolve(__dirname, 'src', 'middlewares')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node modules/,
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]        
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filiname: 'main.css'
        })
    ],
    devServer: { historyApiFallback: true }
}