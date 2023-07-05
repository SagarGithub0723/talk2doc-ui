/* eslint-disable import/no-anonymous-default-export */

import { DOCTOR_NAV, DOCTOR_REG_NAV, PATIENT_NAV, PATIENT_REG_NAV } from "./Constants";



class Util{
    getUserDetailsNavigation(userType) {
        let userNav = "";
        if(userType === "doctor") {
            userNav = DOCTOR_NAV;
        } else if(userType === "patient") {
            userNav = PATIENT_NAV;
        }
        return userNav;
    };

    getUserRegisterNav(userType) {
        let userNav = "";
        if(userType === "doctor") {
            userNav = DOCTOR_REG_NAV;
        } else if(userType === "patient") {
            userNav = PATIENT_REG_NAV;
        }
        return userNav;
    };
};
export default new Util();