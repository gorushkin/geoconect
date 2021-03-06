const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_TYPE: process.env.NEXT_PUBLIC_TYPE,
    NEXT_PUBLIC_ORIGIN: process.env.ORIGIN,
    NEXT_PUBLIC_DEV_ORIGIN: process.env.DEV_ORIGIN,
    NEXT_PUBLIC_PROD_ORIGIN: process.env.PROD_ORIGIN,
    NEXT_PUBLIC_LOCAL_ORIGIN: process.env.LOCAL_ORIGIN,
    NEXT_PUBLIC_SENTRY_DSN: process.env.SENTRY_DSN,
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
