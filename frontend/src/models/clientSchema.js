import * as yup from 'yup';

const phoneRegEx = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g;

const clientSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email()
    .matches(
      /^[a-zA-Z0-9+_.]+[a-zA-Z0-9+_.-]+@[a-zA-Z0-9_.-]+$/,
      'Please enter valid email'
    )
    .required('Email is required'),
  phone: yup
    .string()
    .matches(phoneRegEx, 'Enter valid number')
    .required('Phone is required'),
  address: yup.string().required('Adress is required'),
});

export default clientSchema;
