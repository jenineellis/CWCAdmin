import axios from 'axios';

export default {
    loginUser: function (data) {
        return axios.post('/api/user/admin', data)
    }
}