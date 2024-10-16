const fs = require('fs');
const path = require('path');

class ConfigManager {
  constructor(env) {
    const configPath = path.join(__dirname, 'config.json');
    const configData = fs.readFileSync(configPath, 'utf8');
    this.config = JSON.parse(configData)[env];  // Use the appropriate environment
  }

  getUrl() {
    return this.config.url;
  }

  getUsername() {
    return this.config.username;
  }

  getPassword() {
    return this.config.password;
  }
}

module.exports = ConfigManager;
