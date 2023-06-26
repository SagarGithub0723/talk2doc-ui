/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const LOGIN_BASE_URL = "http://localhost:8080/talk2doc/login";

class LoginService {
  
    validateLogin(userLogin) {
        return axios.post(LOGIN_BASE_URL, userLogin)
    }
}

export default new LoginService();