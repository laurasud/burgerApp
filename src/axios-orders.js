import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-app-burger-ce7f8.firebaseio.com/'
});

export default instance;