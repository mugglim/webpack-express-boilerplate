import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import webpack from 'webpack';

const __dirname = path.resolve();

export default {
	mode: 'development',
	entry: {
		main: './frontend/src/app.js',
	},
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, 'frontend/src/'),
		},
	},
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].js',
		clean: true,
	},
	optimization: {
		minimizer: [new CssMinimizerPlugin()],
		minimize: true,
	},
	devServer: {
		devMiddleware: {
			publicPath: path.resolve(__dirname, '/dist'),
			writeToDisk: true,
		},
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							esModule: false,
						},
					},
					{
						loader: 'sass-loader',
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg|ico)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]?[hash]',
							publicPath: './dist/',
						},
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
		new HtmlWebpackPlugin({template: './frontend/src/index.html'}),
		new CleanWebpackPlugin({cleanAfterEveryBuildPatterns: ['dist']}),
		new webpack.HotModuleReplacementPlugin(),
	],
};
