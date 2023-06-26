/* eslint-disable import/no-anonymous-default-export */

import axios from "axios";

const REGISTER_BASE_URL = "http://localhost:8080/talk2doc";
class RegistrationService {

    saveDoctorRegistration(docRegister) {
        return axios.post(REGISTER_BASE_URL + "/doctors", docRegister);
    }
};
export default new RegistrationService();