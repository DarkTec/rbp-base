import React from "react";
import FormBuilder from "../../../FormBuilder";

const LoginForm = () => {

    const fields = [
        {
            id: "email",
            name: "email",
            type: "email",
            placeholder: "Email Address"
        },
        {
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Password"
        }
    ];

    const onSubmit = (values) => console.log(values);

    return (
        <FormBuilder fields={fields} onSubmit={onSubmit} />
    )
};

export default LoginForm;