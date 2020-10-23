import React, { Fragment, Component } from 'react';
import * as Yup from 'yup';
import { withFormik, Form, Field } from 'formik'

class FormikForm extends Component {

    constructor(props) {

        super(props);
    }

    render() {

        const { values, touched, errors, isSubmitting } = this.props

        return (
            <div>
                <Form>
                    {
                        touched.email &&
                        errors.email &&
                        (
                            <div>
                                {
                                    errors.email
                                }
                            </div>
                        )
                    }
                    <Field type="email" name="email" placeholder="Enter email" />
                </Form>
            </div>
        )
    }

}
export default withFormik(
    {
        mapPropsToValues({ email }) {

            return {

                email: email || ''
            }
        },
        validationSchema: Yup.object().shape(
            {
                email: Yup.string().email('Invalid email').required('Email is mandatory')
            }
        )
    }
)(FormikForm)