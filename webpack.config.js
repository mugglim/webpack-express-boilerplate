import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import webpack from 'webpack';

const __dirname = path.resolve();

export default {
    mode: 'development',
    entry: {
        main: './src/app.js',
    },
    resolve: {
        alias: {
            Config: path.resolve(__dirname, 'config/'),
            Src: path.resolve(__dirname, 'src/'),
        },
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js',
        clean: true,
    },
    devServer: {
        publicPath: path.resolve(__dirname, '/dist/'),
        writeToDisk: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.png$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: './dist/',
                            name: '[name].[ext]',
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ['dist'] }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
