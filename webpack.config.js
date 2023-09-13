const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },
  resolve: {
    alias: {
        "@common-assets": path.resolve(__dirname, "src/common/assets/"),
        "@common-components": path.resolve(__dirname, "src/common/components/"),
        "@common-constants": path.resolve(__dirname, "src/common/constants/"),
        "@common-providers": path.resolve(__dirname, "src/common/providers/"),
        "@common-styles": path.resolve(__dirname, "src/common/styles/"),
        "@common-utils": path.resolve(__dirname, "src/common/utils/"),
        "@feature-auth" : path.resolve(__dirname, "src/features/auth"),
        "@feature-board" : path.resolve(__dirname, "src/features/board"),
        "@feature-cashbook" : path.resolve(__dirname, "src/features/cashbook"),
        "@feature-deal" : path.resolve(__dirname, "src/features/deal"),
        "@feature-main" : path.resolve(__dirname, "src/features/main"),
        "@router" : path.resolve(__dirname, "src/router")
    }
  }
};
