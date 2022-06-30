const axios = require('axios');

axios.get('../../db/mock_data.json')
.then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
}).then(function () {
    // always executed
});
