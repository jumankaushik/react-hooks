import React from "react"
import ReactDOM from "react-dom"


export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: ""}
    )

    console.log(formData)

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
            />
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Form/>)