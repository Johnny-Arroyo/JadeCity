import React, { useState } from 'react'
import styles from './Contact.css'

const Contact = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        trackName: '',
        artistName: '',
        linkUpload: '',
        additionalInfo: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmitting(true)

        // Create a new object to send as JSON
        const formDataToSend = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            emailAddress: formData.emailAddress,
            trackName: formData.trackName,
            artistName: formData.artistName,
            linkUpload: formData.linkUpload,
            additionalInfo: formData.additionalInfo,
        }

        // Send the form data
        fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataToSend),
        })
            .then((response) => {
                if (
                    response.headers
                        .get('content-type')
                        ?.includes('application/json')
                ) {
                    return response.json()
                }
                return response.text()
            })
            .then((data) => {
                setSuccessMessage('Thank you for your submission!')
                setFormData({
                    firstName: '',
                    lastName: '',
                    emailAddress: '',
                    trackName: '',
                    artistName: '',
                    linkUpload: '',
                    additionalInfo: '',
                })
            })
            .catch((error) => {
                console.error('Error:', error)
                setSuccessMessage(
                    'Failed to submit the form. Please try again.'
                )
            })
            .finally(() => {
                // Reset submitting state
                setIsSubmitting(false)
            })
    }

    return (
        <div>
            <section id="contact">
              <h2> Contact </h2>
                <form
                    method="post"
                    encType="multipart/form-data"
                    className="demoForm"
                    id="demoForm"
                    acceptCharset="utf-8"
                    autoComplete="on"
                    onSubmit={handleSubmit}>
                    <div id="contactHeading">
                        <h3>Submit Demos to Jade City</h3>
                        <p>
                            We are excited to listen to your enchanted
                            tune!
                        </p>
                    </div>
                    <fieldset>
                        <legend>Your Info</legend>
                        <input
                            type="text"
                            id="first"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            placeholder="First Name*"
                        />
                        <input
                            type="text"
                            id="last"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            placeholder="Last Name*"
                        />
                        <input
                            type="email"
                            id="email"
                            name="emailAddress"
                            value={formData.emailAddress}
                            onChange={handleChange}
                            required
                            placeholder="Your email"
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Song Info</legend>
                        <input
                            type="text"
                            id="track"
                            name="trackName"
                            value={formData.trackName}
                            onChange={handleChange}
                            required
                            placeholder="Track Name*"
                        />
                        <input
                            type="text"
                            id="artist"
                            name="artistName"
                            value={formData.artistName}
                            onChange={handleChange}
                            required
                            placeholder="Artist Name*"
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Demo Link</legend>
                        <input
                            type="url"
                            id="linkUpload"
                            name="linkUpload"
                            value={formData.linkUpload}
                            onChange={handleChange}
                            placeholder="Your Track URL*"
                        />
                        <p>*please enable downloads on your track*</p>
                    </fieldset>
                    <fieldset>
                        <legend>Tell us more about your song</legend>
                        <textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            rows="5"
                            cols="30"
                            value={formData.additionalInfo}
                            onChange={handleChange}></textarea>
                    </fieldset>
                    <button
                        className="submit"
                        type="submit"
                        disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                {successMessage && (
                    <div className="successMessage">
                        {successMessage}
                    </div>
                )}
                </form>

            </section>
        </div>
    )
}

export default Contact
