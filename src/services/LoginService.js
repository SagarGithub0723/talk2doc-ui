/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { BASE_URL } from "../utility/Constants";

const LOGIN_URL = "/login";

class LoginService {
  
    validateLogin(userLogin) {
        return axios.post(BASE_URL + LOGIN_URL, userLogin)
    }
}

export default new LoginService();