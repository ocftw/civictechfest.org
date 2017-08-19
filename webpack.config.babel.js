import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import CopyWebpackPlugin from 'copy-webpack-plugin';
import autoprefixer from "autoprefixer";

import {basic} from "./jld.js";

var plugins = [
  new ExtractTextPlugin("[name].[hash].css", {disable: process.env.NODE_ENV !== 'production'}), // Disable extract-text-plugin during development for hot-reloading CSS.
  new HtmlWebpackPlugin({
    title: "#CivicTechFest",
    jld: basic,
    description: "Asia’s first ever civic technology festival and conference is coming on 2017 Sep. 10th - 16th at Taipei, Taiwan.  ",
    filename: "index.html",
    template: "app/templates/index.html"
  }),
  new CopyWebpackPlugin([
		  {from: "app/javascripts/pages/**/*.png", to: "images/", flatten: true},
	  ]),
];

if (/production/.test(process.env.NODE_ENV)) {
    plugins = plugins.concat([
      new webpack.optimize.UglifyJsPlugin()
    ]);
}

export default {

  entry: {
    application: "./app/javascripts/application.js",
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[hash].js",
    publicPath: "/",
  },

  resolve: {
    extensions: ["", ".js", ".jsx", ".css"],
    modulesDirectories: ["app", "node_modules"],
  },

  module: {
    loaders: [
      {
        test: /\.(png|jpg|svg|jpeg|PNG|JPG|SVG|JPEG)$/,
        loader: 'url?limit=10000',
        exclude: /sponsors|og\.png$/, // Facebook can't recognize inline og:image.
      },
      {
        test: /app\/images\/keynote/,
        loader: 'file',
        query: {
          name: "images/keynote/[name].[ext]"
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
      {
        test: /app\/fonts\//,
        loader: 'file',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]-[local]__[hash:base64:5]&importLoaders=1&sourceMap!postcss')
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.md$/,
        loader: 'html!markdown',
      },
      {
        test: /template.html$/,
        loader: 'raw-loader',
      },
    ]
  },

  postcss: [
    require('lost'),
    require('precss'),
    autoprefixer({ browsers: ['last 2 versions', '> 1%', 'Firefox > 20'] }),
  ],

  devServer: {
    host: process.env.HOST || 'localhost',
    contentBase: path.join(__dirname, "dist"),
    publicPath: '/',
    historyApiFallback: {index: '/'},
  },

  plugins,
};
