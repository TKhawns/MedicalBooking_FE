import axios from '../axios';
const handleLoginApi = async (username, password) => {
    return axios.post('api/login', { email: username, password: password });
};

const getAllUsers = async (id) => {
    return axios.post('/api/get-all-users', { id: id });
};

export { handleLoginApi, getAllUsers };
