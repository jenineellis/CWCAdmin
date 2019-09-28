import axios from 'axios';

export default {
    loginUser: function (data) {
        return axios.post('/api/user/admin', data)
    }
}, 
// export default {
//     allUsers: function (data) {
//         return axios.post('/api/user/admin', data)
//     }
// }, 
// export default {
//     allProducers: function (data) {
//         return axios.post('/api/user/admin', data)
//     }
// }, 
// export default {
//     allOrders: function (data) {
//         return axios.post('/api/user/admin', data)
//     }
// }