const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './client/src/index.jsx', // Entry point of your React app
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory for the bundle
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Regex to target .js and .jsx files
                exclude: /node_modules/, // Don't transpile node_modules
                use: {
                    loader: 'babel-loader', // Use Babel to transpile ES6+ and JSX
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                    },
                },
            },
            {
                test: /\.css$/, // Regex to target CSS files
                use: ['style-loader', 'css-loader'], // Load and inject CSS into the bundle
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Resolve .js and .jsx extensions
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Serve content from the dist folder
        },
        compress: true,
        port: 3000,
        historyApiFallback: true, // Handles routing for SPA apps
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/public/index.html', // Point to your HTML template
            filename: 'index.html',
        }),
    ],
}
