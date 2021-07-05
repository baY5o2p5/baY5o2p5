const path = require('path');
const FileManager = require('filemanager-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, 'dist'),
        host: '0.0.0.0',
        port: 9160,
        inline: true,
        watchContentBase: true,
        watchOptions: {
            poll: 100,
        },
    },
    // mode:'production',
    // mode:'none',
    entry: './src/dist/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
        ]
    },
    plugins: [
        new FileManager({
            events: {
                onStart: {
                    copy: [{
                        source: './src/*.css',
                        destination: './src/dist'
                    }]
                },
                onEnd: {
                    copy: [{
                        source: './index.html',
                        destination: './dist/index.html'
                    }],
                    delete:['./dist/webpack.config.js']
                },

            }
        }),
    ],
};