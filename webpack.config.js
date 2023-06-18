const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js',
    },
    output: {
        filename: '[name].js', 
        path: path.resolve(__dirname, 'dist'), 
        clean: true, 
    },                                        
    module: {
        rules: [ 
            {
                test: /\.css$/i, 
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },                                      
            {                                       
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource', 
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            },   
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.scss$/i,
                use: [ 
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer",
                                        {
                                            "browsers": 'last 10 versions'
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader", 
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "ie 11" }]
                        ]
                    }
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'main',     
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        static: './dist',
        watchFiles:['./src/index.html']
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
};