import constants from '@/config/constants';
import axios from 'axios';

class AuthService{
  async login(login: string, password: string){
    const {data} = await axios.post(constants.API_URL + '/auth/login', {login, password}, {withCredentials: true});
    return data;
  }
  async verifyToken(token: string | undefined = undefined){
    const {data} = await axios.post(constants.API_URL + '/auth/verifyToken', {token}, {withCredentials: true});
    return data;
  }
}

export default new AuthService();