const UserValidationSchema = {
    Name:{
        isLength:{
            options:{
                min:3,
                max:32
            },
            errorMessage: "Name must be between 3-10 characters",
        },
        notEmpty: {
            errorMessage: "Name must not be Empty",
        },
        isString: {
            errorMessage: "Name must be a string",
        },
    },
    displayName:{
        isLength:{
            options:{
                min:3,
                max:32
            },
            errorMessage: "displayName must be between 3-10 characters",
        },
        notEmpty: {
            errorMessage: "displayName must not be Empty",
        },
        isString: {
            errorMessage: "displayName must be a string",
        },
    },
    quantity:{
        notEmpty: {
            errorMessage: "quantity must not be Empty",
        },
        isNumeric: {
            errorMessage: "quantity must be a number",
        },
    },
};

module.exports = UserValidationSchema;
