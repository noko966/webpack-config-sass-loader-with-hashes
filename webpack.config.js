const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV === 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // mode: 'development',

    entry: {
        app: './src/index.js',
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        ...(isDev ? [] : [
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css',
                chunkFilename: '[name].[contenthash].css',
            }),
        ]),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    devtool: 'inline-source-map',

    devServer: {
        contentBase: './dist'
    },



    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                (isDev ? "style-loader" : MiniCssExtractPlugin.loader),
                {
                    loader: "css-loader",
                    options: {
                        modules: true,
                    }
                },
                "sass-loader"
            ]
        }]
    }
};