const nodecron = require('node-cron');
const superagent = require('superagent');

// nodecron.schedule('* 30 14 * * 1-5', function() {
//     superagent
//         .get('http://localhost:9000/yapi/dailyUpdate')
//         .then(res => {
//             console.log(res.body);
//         })
//         .catch(err => console.error(err));
// });

// superagent
//     .get('http://localhost:9004/yapi/dailyUpdate')
//     .then(res => {
//         console.log(res.body);
//     })
//     .catch(err => console.error(err));


nodecron.schedule('0,29 * * * * 1-5', function() {
    superagent
        .get('http://localhost:9004/yapi/dailyUpdate')
        .then(res => {
            console.log(res.body);
        })
        .catch(err => console.error(err));
});