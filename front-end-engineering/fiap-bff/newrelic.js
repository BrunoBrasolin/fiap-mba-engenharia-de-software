'use strict';
exports.config = {
  app_name: [process.env.NEW_RELIC_APP_NAME || 'My Application'],
  license_key: process.env.NEW_RELIC_LICENSE_KEY,
  logging: {
    level: 'info'
  }
};