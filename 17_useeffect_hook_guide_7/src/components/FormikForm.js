import React, { Fragment, Component } from 'react';
import * as Yup from 'yup';
import { withFormik, Form, Field } from 'formik'

class FormikForm extends Component {

    constructor(props) {

        super(props);
    }

    render() {

        const { email } = this.props

        return (
            <Fragment>
                Hello from FormikForm component
            </Fragment>
        )
    }

}

export default FormikForm