var merge = require('webpack-merge'),
    path = require('path'),
    htmlWebpackPlugin = require('html-webpack-plugin'),
    Dotenv = require('dotenv-webpack'),
    optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    uglyfysPlugin = require('uglifyjs-webpack-plugin'),
    miniCssExtractPlugin = require('mini-css-extract-plugin'),
    cleanWebpackPlugin = require('clean-webpack-plugin'),
    criticalPlugin = require('webpack-plugin-critical').CriticalPlugin;

var newPage = function({ title, template, chunks, filename }) {
    return new htmlWebpackPlugin({
        title: title,
        template: template,
        chunks: chunks,
        minify: {
            collapseWhitespace: true
        },
        filename: filename
    });
};

var commonConfig = {
    entry: {
        home: ['babel-polyfill', path.join(__dirname, 'src', 'pages', 'app')],
        article: ['babel-polyfill', path.join(__dirname, 'src', 'pages', 'article')]
    },
    output: {
        filename: '[name][hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new Dotenv(),
        newPage({
            title: 'Home',
            template: path.join(__dirname, 'src', 'index.html'),
            chunks: ['home'],
            filename: path.resolve(__dirname, 'dist', 'index.html')
        }),
        newPage({
            title: 'Article',
            template: path.join(__dirname, 'src', 'index.html'),
            chunks: ['article'],
            filename: path.resolve(__dirname, 'dist', 'article.html')
        }),
    ],
    module: {
        rules: [{
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[path][name].[hash].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            },
            {
                test: /\.(html)$/,
                use: 'html-loader'
            }
        ]
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
            services: path.resolve(__dirname, 'src', 'services'),
            pages: path.resolve(__dirname, 'src', 'pages'),
            assets: path.resolve(__dirname, 'src', 'assets'),
            styles: path.resolve(__dirname, 'src', 'styles')
        }
    },
    devtool: 'source-map'
};

var devConfig = {
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devServer: {
        overlay: true,
        port: 3000
    }
};

var prodConfig = {
    optimization: {
        minimizer: [
            new optimizeCSSAssetsPlugin({
                cssProcessorOptions: { map: { inline: false } }
            })
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new cleanWebpackPlugin(['dist']),
        new criticalPlugin({
            src: path.join(__dirname, 'src', 'index.html'),
            inline: true,
            minify: true,
            dest: path.join(__dirname, 'dist', 'index.html')
        })
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                miniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }]
    }
};

module.exports = (env, argv) =>
    argv.mode === 'development' ?
    merge(commonConfig, devConfig) :
    merge(commonConfig, prodConfig);;