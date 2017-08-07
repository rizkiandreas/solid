module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'kudoworker',
      script    : './dist/index.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_development : {
        NODE_ENV: 'development'
      },
      env_production : {
        NODE_ENV: 'production'
      },
      watch : true,
      ignore_watch : ['node_modules', 'src/views', 'uploads'],
      watch_options : {
        followSymlinks: false
      }
    },
  ],
};
