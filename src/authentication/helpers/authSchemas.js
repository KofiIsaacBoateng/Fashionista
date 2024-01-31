import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
    email: yup.string()
        .trim()
        .email("Invalid email!")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Email must match the following format: example@gmail.com")
        .required("Email required!"),

    password: yup.string()
        .min(8, "Password too short")
        .max(50, "Password too long")
        .required("Password required!")
})


const registerValidationSchema = yup.object().shape({
    name: yup.string()
        .min(2, "Name is too short!")
        .max(50, "Name is too long!")
        .required("Name is required!"),
        
    email: yup.string()
        .trim()
        .email("Invalid email!")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Email must match the following format: example@gmail.com")
        .required("Email required!"),

    password: yup.string()
        .min(8, "Password too short")
        .max(50, "Password too long")
        .required("Password required!"),

    persist: yup.boolean()
        .default(false)
})


export {loginValidationSchema, registerValidationSchema}