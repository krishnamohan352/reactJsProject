import * as Yup from "yup";

export const billingSchema = Yup.object({
    name: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),

    email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),

    address: Yup.string()
        .required("Address is required"),

    city: Yup.string()
        .required("City is required"),

    zip: Yup.string()
        .required("ZIP is required")
        .matches(/^[0-9]{5,6}$/, "Invalid ZIP code")
});