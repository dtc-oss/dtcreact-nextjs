require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')

const aliases = {
  Containers: path.resolve(__dirname, "containers"),
  Components: path.resolve(__dirname, "components"),
  Utils: path.resolve(__dirname, "components/utilities"),
  Layout: path.resolve(__dirname, "containers/layouts"),
  Hocs: path.resolve(__dirname, "hocs"),
  Hooks: path.resolve(__dirname, "hooks"),
  Contexts: path.resolve(__dirname, "contexts"),
  Static: path.resolve(__dirname, "static"),
  Actions: path.resolve(__dirname, "redux/actions"),
  Reducers: path.resolve(__dirname, "redux/reducers"),
  Types: path.resolve(__dirname, "redux/types"),
  Config: path.resolve(__dirname, "config"),
  Routes: path.resolve(__dirname, "config/routes.js"),
}

const isDev = process.env.NODE_ENV !== 'production'

const nextConfig = {
  // Will be available on both server and client
  publicRuntimeConfig: {
    host: isDev ? process.env.HOST_DEV : process.env.HOST_PROD,
    gaID: isDev ? '' : process.env.GA_ID
  },
  // Disallow pages as route
  useFileSystemPublicRoutes: false,
  webpack: config => {
    config.resolve = {
      ...config.resolve,
      extensions: [...config.resolve.extensions, ".scss", ".css", ".mdx"],
      alias: { ...config.resolve.alias, ...aliases },
    }

    config.node = {
      ...config.node,
      fs: "empty",
    }

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    if (config.dev) {
      config.module.rules.push({
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
        options: {
          emitWarning: true,
        },
      })
    } else {
      // minify css
      if (Array.isArray(config.optimization.minimizer)) {
        config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}))
      }
    }
    
    return config
  }
}

module.exports = nextConfig