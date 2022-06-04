const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: ['./assets/js/script.js', './assets/scss/style.scss'],
    output: {
        // path: path.resolve(__dirname, 'assets'),
        filename: "bundle.js"
    },
    watch: true,
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./assets/images", to: "images" },
                { from: "./assets/css/fonts", to: "css/fonts" },
            ],
        }),
    ],
    module: {

        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: [

                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: '/css/', name: '[name].min.css' }
                    },
                    'sass-loader'
                ]
            }
        ]
    }
}