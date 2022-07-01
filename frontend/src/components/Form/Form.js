import React from 'react';
import { useFormik } from 'formik';
import clientSchema from 'models/clientSchema';
import { FormStyled, FormContainerStyled, LabelStyled } from './Form.styled';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const Form = () => {
  const onSubmit = () => {
    console.log(formik.values);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues,
    initialErrors: initialValues,
    validationSchema: clientSchema,
    validateOnBlur: true,
    onSubmit,
  });

  return (
    <FormContainerStyled>
      <FormStyled onSubmit={formik.handleSubmit}>
        <LabelStyled>
          <div>Name</div>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          <p>{formik.touched.name && formik.errors.name}</p>
        </LabelStyled>
        <LabelStyled>
          <div>Email</div>
          <input
            name="email"
            placeholder="Enter your email"
            id="email"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <p>{formik.touched.email && formik.errors.email}</p>
        </LabelStyled>
        <LabelStyled>
          <div>Phone</div>
          <input
            name="phone"
            id="phone"
            type="text"
            onChange={formik.handleChange}
            placeholder="***-**-**"
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          <p>{formik.touched.phone && formik.errors.phone}</p>
        </LabelStyled>
        <LabelStyled>
          <div>Address</div>
          <input
            name="address"
            placeholder="Enter your address"
            id="address"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          <p>{formik.touched.address && formik.errors.address}</p>
        </LabelStyled>
        <button type="submit">Submit</button>
      </FormStyled>
    </FormContainerStyled>
  );
};

export default Form;
