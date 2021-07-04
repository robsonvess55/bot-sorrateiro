const axios = require('axios');

module.exports = {
    logStore : logStore,
};

function logStore (route, body = null) {
    return axios.post(process.env.API_URL+route, body);
}
