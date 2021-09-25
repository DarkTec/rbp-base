import path from "path";
import CopyPlugin from "copy-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        open: true,
        port: 3000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules )/,
                loader: "babel-loader",
                options: {
                    plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react",
                        "@babel/preset-typescript",
                    ]
                }
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    resolve: { extensions: [".tsx", ".ts", ".js"] },
    plugins: [
        isDevelopment ? new ReactRefreshWebpackPlugin() : null,
        new CopyPlugin({
            patterns: [
                { from: "public", to: "." },
            ],
        }),
    ]
};
