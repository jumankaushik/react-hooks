import React from 'react'

export default function Signup(){

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordConfirmed: "",
        joinedNewsLetter: true

    })

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))

    }

    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.passwordConfirmed){
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }

        if(formData.joinedNewsLetter) {
            console.log("Thanks for signing up for our newsletter!")
        }

    }

    return(
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    name='email'
                    onChange={handleChange}
                    value={formData.email}

                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    name='password'
                    onChange={handleChange}
                    value={formData.password}

                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="form--input"
                    name='passwordConfirmed'
                    onChange={handleChange}
                    value={formData.passwordConfirmed}

                />

                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name='joinedNewsLetter'
                        onChange={handleChange}
                        checked={formData.joinedNewsLetter}


                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}