const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ["./src/index.jsx"],
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "[name].js"
    },
    devtool: 'source-map',
    devServer: {
        contentBase: "./docs"
    },
    resolve: {
        modules: [
            'src', 'node_modules'
        ],
        extensions: ['.js', '.jsx', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            }, {
                test: /\.(s*)css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }, {
                test: /\.(jpe?g|png|gif)$/i,
                exclude: /node_modules/,
                loader: 'file-loader?name=[name].[hash].[ext]'
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.(s*)css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "[name].css"}),
        new HtmlWebPackPlugin({template: "./src/index.html"})
    ]
};