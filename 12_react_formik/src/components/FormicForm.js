import React, { Component } from 'react';

import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

class FormicForm extends Component {

  render() {

    const { values, touched, errors, isSubmitting } = this.props;

    return (
      <div>
        <Form>
          <div>
            {
              touched.email && errors.email && <p>{errors.email}</p>
            }
            <Field type="email" name="email" placeholder="Email" />
          </div>

          <div>
            {
              touched.password && errors.password && <p>{errors.password}</p>
            }
            <Field type="password" name="password" placeholder="Password" />
          </div>

          <label>
            <Field type="checkbox" name="newsletter" checked={values.newsletter} placeholder="Password" />
            Join our newsletter
          </label>

          <Field component="select" name="plan">
            <option value="free">Free</option>
            <option value="premium">Premium</option>
          </Field>

          <button disabled={isSubmitting}> Submit</button>
        </Form>
      </div>
    )
  }
}

export default withFormik(
  {
    mapPropsToValues({ email, password, newsletter, plan }) {

      return {
        email: email || '',
        password: password || '',
        newsletter: newsletter || false,
        plan: plan || 'premium'
      }
    },
    validationSchema: Yup.object().shape(
      {
        email: Yup.string().email('Enetred email is invalid').required('Email is required'),
        password: Yup.string().min(5, 'Password must be 5 digits long').required('Password is required')
      }
    ),
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {

      setTimeout(
        () => {
          setErrors({ email: 'Email is already used.' });
          setSubmitting(false);
        }, 4000
      );
    }

  }
)(FormicForm);