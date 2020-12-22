import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rehman-curd-task.herokuapp.com/'
});

export default instance;