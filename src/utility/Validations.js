/*-------------------------------------------------------------------
|  🐼 Input Validators 
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const first_name_validation = {
  name: 'firstName',
  label: 'First Name',
  type: 'text',
  id: 'firstName',
  placeholder: 'write your first name ...',
  
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const last_name_validation = {
  name: 'lastName',
  label: 'Last Name',
  type: 'text',
  id: 'lastName',
  placeholder: 'write your last name ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const mobile_no_validation = {
  name: 'mobileNo',
  label: 'Mobile',
  type: 'text',
  id: 'mobileNo',
  placeholder: 'Enter your mobile no ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value: /^[0-9]+$/,
      minLength: 10,
      message: 'Enter valid mobile no',
    },
    minLength: {
      value: 10,
      message: 'Enter valid mobile no',
    },
    maxLength: {
      value: 10,
      message: 'Enter valid mobile no',
    },
  },
}

export const doc_speciality_validation = {
  name: 'specialist',
  label: 'Specialist',
  type: 'text',
  id: 'specialist',
  placeholder: 'provide your speciality ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const password_validation = {
  name: 'pw_pin',
  label: 'Pw Pin',
  type: 'password',
  id: 'pw_pin',
  placeholder: 'type password ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value: /^[0-9]+$/,
      message: 'Enter valid password pin',
    },
    minLength: {
      value: 4,
      message: 'Min 4 digits password pin allowed',
    },
    maxLength: {
      value: 6,
      message: 'Max 6 digits password pin allowed',
    },
  },
}

export const confirm_password_validation = {
  name: 'conf_pw_pin',
  label: 'Confirm Pw Pin',
  type: 'password',
  id: 'conf_pw_pin',
  placeholder: 'type password ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value: /^[0-9]+$/,
      message: 'Enter valid password pin',
    },
    minLength: {
      value: 4,
      message: 'Min 4 digits password pin allowed',
    },
    maxLength: {
      value: 6,
      message: 'Max 6 digits password pin allowed',
    },
  },
}

export const age_validation = {
  name: 'age',
  label: 'Age',
  type: 'number',
  id: 'age',
  placeholder: 'provide your Age',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const email_validation = {
  name: 'emailId',
  label: 'email address',
  type: 'email',
  id: 'emailId',
  placeholder: 'write a random email address',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not valid',
    },
  },
}

export const area_pin_code_validation = {
  name: 'areaPinCode',
  label: 'Area Pin Code',
  type: 'text',
  id: 'areaPinCode',
  placeholder: 'provide your area pin code ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value: /^[0-9]+$/,
      message: 'Enter valid area pin code',
    },
    length: {
      value: 6,
      message: 'Please provide valid 6 digits area pin code',
    },
  },
}

export const raise_query_validation = {
  name: 'queryDescription',
  label: 'Your Query Description',
  type: 'textarea',
  id: 'queryDescription',
  multiline: true,
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const query_related_validation = {
  name: 'queryRelatedWith',
  label: 'Query related with',
  type: 'text',
  id: 'queryRelatedWith',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
