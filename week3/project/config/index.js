// Fetching the environment
const env = process.env.NODE_ENV || 'development';

// Common Environment Variables
const commonVariables = {

}

JWT_SECRET_KEY = gfg_jwt_secret_key;
  
TOKEN_HEADER_KEY = gfg_token_header_key;

//setting the common variables
Object.keys(commonVariables).forEach((key) => {
    process.env[key] = commonVariables[key];
    // console.log(key, ' => ',  commonVariables[key])
})

if (env === 'development') {

    let developmentEnvConfig = require('./development');
    Object.keys(developmentEnvConfig).forEach((key) => {
        process.env[key] = developmentEnvConfig[key];
        // console.log(key, ' => ',  developmentEnvConfig[key])
    })


} else { // PRODUCTION

    let productionEnvConfig = require('./production');
    Object.keys(productionEnvConfig).forEach((key) => {
        process.env[key] = productionEnvConfig[key];
    })
}

