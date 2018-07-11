const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

const convert = require('koa-connect');
const history = require('connect-history-api-fallback');
const proxy = require('http-proxy-middleware');

const ScriptExtPlugin = require('script-ext-html-webpack-plugin');

module.exports = () => {
    return {
        mode: 'development',
        target: 'web',
        entry: {
            app: path.resolve(__dirname, './apps/todo/public/js/start.module.ts'),
            start: path.resolve(__dirname, './apps/todo/public/js/main.ts')
        },
        output: {
            filename: '[name].bundle.js',
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
                { test: /\.ts?$/, loader: '@ngtools/webpack'},
                {
                    test: /\.html$/,
                    loader:'html-loader',
                    options: {
                        exportAsEs6Default: 'es6',
                        minimize: true,
                        collapseWhitespace: true
                    }
                }
            ]
        },
        plugins: [

            new HtmlWebpackPlugin({
                template: __dirname + '/apps/todo/public/index.html',
                output: __dirname + '/dist',
                inject: 'head'
            }),
            new ScriptExtPlugin({
                defaultAttribute: 'defer'
            }),
            new AngularCompilerPlugin({
                mainPath: './apps/todo/public/js/main.ts',
                tsConfigPath: './tsconfig.json',
                skipCodeGeneration: false
            })
        ],
        serve: {
            content: [__dirname],
            add: (app, middleware, options) => {
                app.use(convert(proxy('/amorphic', { target: 'http://localhost:3000 '})));
                app.use(convert(history()));
            }
        }
    }
}