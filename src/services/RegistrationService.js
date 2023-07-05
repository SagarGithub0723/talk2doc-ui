/* eslint-disable import/no-anonymous-default-export */

import axios from "axios";
import { BASE_URL } from "../utility/Constants";

const DOCTORS_URL = "/doctors";
const PATIENTS_URL = "/patients";

class RegistrationService {

    saveDoctorDetails(docRegister) {
        return axios.post(BASE_URL + DOCTORS_URL, docRegister);
    }

    savePatientDetails(docRegister) {
        return axios.post(BASE_URL + PATIENTS_URL, docRegister);
    }
};
export default new RegistrationService();