import React, { useState } from "react";

type FormBuilderProps = {
    fields: any[];
    onSubmit: (values) => void;
}
const FormBuilder = (props: FormBuilderProps) => {

    const createInitialState = () => {
        const tempFormValues = {};

        props.fields.forEach((field) => {
            tempFormValues[field.id] = "";
        });
        return useState<any>(tempFormValues);
    }

    const [formValues, setFormValues] = createInitialState();

    const onChange = (fieldId) => (e) => {
        setFormValues({
            ...formValues,
            [fieldId]: e.target.value
        });
    }

    const submitForm = (e) => {
        if (e) e.preventDefault();
        props.onSubmit(formValues);
    }

    return (
        <form onSubmit={submitForm}>
            {
                props.fields.map((field) => {
                    return (
                        <input key={field.id} {...field} value={formValues[field.name]} onChange={onChange(field.id)} />
                    )
                })
            }
            <button type="submit">Click me</button>
        </form>
    )
}

export default FormBuilder;