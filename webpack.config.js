const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    return {
        mode: 'development',
        target: 'web',
        entry: path.resolve(__dirname, './apps/todo/public/js/start.module.ts'),
        output: {
            filename: 'bundle.js',
            path: path.resolve('dist'),
            publicPath: '/dist/'
        },
        resolve: {
            extensions: ['.ts', '.js'],
            alias: {
                amorphic: path.resolve(__dirname, './node_modules/semotus/index.js')
            }
        },

        // Source maps support ('inline-source-map' also works)
        devtool: 'source-map',

        // Add the loader for .ts files.
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    loader: 'awesome-typescript-loader'
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: __dirname + '/apps/todo/public/index.html',
                output: __dirname + '/dist',
                inject: 'head'
            })
        ]
    }
}