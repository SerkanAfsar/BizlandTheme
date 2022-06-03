const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./assets/js/script.js', './assets/scss/style.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true,
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