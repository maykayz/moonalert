module.exports = {
  rules: [{
    test: /\.js$/,
    enforce: 'pre',
    use: 'eslint-loader',
    include: path.resolve(__dirname), // <-- This tell to eslint to look only in your project folder
    exclude: /node_modules/
  }]
};
