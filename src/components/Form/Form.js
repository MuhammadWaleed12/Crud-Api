import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import './Form.css';

const form = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            age: "",
            gender: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, "Minimum 2 characters")
                .max(15, "Maximum 15 characters")
                .required("Required!"),
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            age: Yup.string()
                .max(3, "Maximum 3 digits")
                .required("Required!"),
            gender: Yup.string()
                .min(4, "Minimum 4 characters")
                .max(15, "Maximum 15 characters")
                .required("Required!")
        }),
        onSubmit: values => {
            debugger;
            props.clicked({values});
        }
    });

    return (
        <div className="Form">
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.name && formik.touched.name && (
                        <p>{formik.errors.name}</p>
                    )}
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && (
                        <p>{formik.errors.email}</p>
                    )}
                </div>
                <div>
                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.age && formik.touched.age && (
                        <p>{formik.errors.age}</p>
                    )}
                </div>
                <div>
                    <label>Gender</label>
                    <input
                        type="text"
                        name="gender"
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.gender && formik.touched.gender && (
                        <p>{formik.errors.gender}</p>
                    )}
                </div>
                <div>
                    <button type="submit" onSubmit={formik.handleSubmit} disabled={!formik.isValid}>Submit</button>
                </div>
            </form>
        </div>
    );
}
export default form;