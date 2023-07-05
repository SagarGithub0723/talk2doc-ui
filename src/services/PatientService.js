/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { BASE_URL, PATIENTS_QUERIES_NAV, PATIENT_QUERY_NAV } from "../utility/Constants";


class PatientService {
  
    savePatientQuery(patientQuery) {
        return axios.post(BASE_URL + PATIENT_QUERY_NAV, patientQuery)
    }

    getAllQueries() {
        return axios.get(BASE_URL + PATIENTS_QUERIES_NAV);
    }

    getAllQueriesByPatient(mobileNo) {
        return axios.get(BASE_URL + {mobileNo} + "/queries");
    }

    getPatientQueryById(id) {
        return axios.get(BASE_URL + PATIENT_QUERY_NAV +"/" + id)
    }

    updatePatientQueryById(id, patientQuery) {
        return axios.put(BASE_URL + PATIENT_QUERY_NAV +"/" + id, patientQuery)
    }
}

export default new PatientService();