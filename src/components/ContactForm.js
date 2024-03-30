import { useState } from "react"

export const ContactForm = ()=>{

    const formInitialDetails = {
            firstName : '',
            lastName :'',
            email : '',
            phone : '',
            message : '',
        }

    const [formDetails , setFormDetails] = useState(formInitialDetails)

}