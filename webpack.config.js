const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, './src');

module.exports = {
  mode: 'development',

  entry: {
    app: SRC_DIR + '/index.ts',
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@app': path.resolve(__dirname, 'src'),
      '@root': path.resolve(__dirname)
    }
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],

  devServer: {
    contentBase: path.join(SRC_DIR, 'dist'),
    compress: true,
    port: 9000,
    watchContentBase: true,
    open: true
  }
};
