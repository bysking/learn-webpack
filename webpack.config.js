let path = require('path');
module.exports = {
    entry: './src/index.js',
    mode: 'development', // production | development
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dst')
    }
}