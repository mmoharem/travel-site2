var path = require('path');

// module.exports = {
//     entry: "./app/assets/javascript/App.js",
//     output: {
//         path: path.resolve(__dirname, "./app/temp/javascript"),
//         filename: "App.js"
//     },
//     module: {
//         loaders: [
//             {
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ['es2015']
//                 },
//                 test: /\.js$/,
//                 exclude: /node_modules/
//             }
//         ]
//     }
// }


module.exports = {
    entry: "./app/assets/javascript/App.js",
    output: {
        path: path.resolve(__dirname, "./app/temp/javascript"),
        filename: "App.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }

            }
        ]
    }
}
