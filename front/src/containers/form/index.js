import React from "react";
import UserForm from "../../components/form";



const FormContainer = () => {
    const userData = {
        name: 'John',
        email: 'hello@gmail.com',
        age: 14
    }



    return (

        <UserForm userData={userData} />

    )
}

export default FormContainer;