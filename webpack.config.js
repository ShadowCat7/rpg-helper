var config = {
    context: __dirname,
    entry: "./index.jsx",

    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ],
    }
};
module.exports = config;
