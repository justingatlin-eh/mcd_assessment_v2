const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: { 'main': './wwwroot/src/app.js' },
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist/js'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: [
                'popper.js',
                'default'
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            '@babel/preset-env'
                        ]
                    }
                }
            },
        ]
    }
};
