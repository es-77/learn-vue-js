// Load dotenv and load the .env file
const dotenv = require('dotenv');
dotenv.config({ path: './src/components/projectSetup/.env' });

console.log('VUE_APP_API_URL', process.env.VUE_APP_API_URL);

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
});
