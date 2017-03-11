var webpack = require('webpack')

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=30'
        }]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by pdc')
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true
    },
}
