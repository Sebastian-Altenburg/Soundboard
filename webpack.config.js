const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        script: "./src/script.js",
    },
    plugins: [],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        // publicPath: "dist",
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                // loader: "file-loader",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ["csv-loader"],
            },
            {
                test: /\.xml$/i,
                use: ["xml-loader"],
            },
        ],
    },
};
