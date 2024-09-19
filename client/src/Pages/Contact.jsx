// src/components/ContactForm.jsx
import React, { useState } from 'react'

const Contact = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        trackName: '',
        artistName: '',
        fileUpload: null,
        additionalInfo: '',
    })

    // Handle input change
    const handleChange = (e) => {
        const { name, value, type, files } = e.target
        setFormData({
            ...formData,
            [name]: type === 'file' ? files : value,
        })
    }

    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Create a new FormData object
      const form = new FormData();
  
      // Append the form data
      form.append('firstName', formData.firstName);
      form.append('lastName', formData.lastName);
      form.append('emailAddress', formData.emailAddress);
      form.append('trackName', formData.trackName);
      form.append('artistName', formData.artistName);
      form.append('additionalInfo', formData.additionalInfo);
  
      // Append the file (handle multiple file uploads)
      if (formData.fileUpload && formData.fileUpload.length > 0) {
          Array.from(formData.fileUpload).forEach((file) => {
              form.append('fileUpload', file);  // 'fileUpload' is the key
          });
      }
  
      // Send the form data using fetch
      fetch('/api/send-email', {
          method: 'POST',
          body: form,  // Send FormData, no need for headers with FormData
      })
          .then((response) => response.json())
          .then((data) => {
              console.log('Success:', data);
              alert('Form submitted and email sent successfully!');
          })
          .catch((error) => {
              console.error('Error:', error);
              alert('Failed to submit the form.');
          });
  
      // Reset form data
      setFormData({
          firstName: '',
          lastName: '',
          emailAddress: '',
          trackName: '',
          artistName: '',
          fileUpload: null,
          additionalInfo: '',
      });
  };

    return (
        <div>
            <div className="gradient"></div>
            <div className="section-plum">
                <section id="contact">
                    <form
                        method="post"
                        encType="multipart/form-data"
                        name="demoForm"
                        id="demoForm"
                        acceptCharset="utf-8"
                        autoComplete="on"
                        onSubmit={handleSubmit}>
                        <div id="contactHeading">
                            <h2>Submit Demos to Jade City</h2>
                            <p>
                                We are excited to listen to your
                                enchanted tune!
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
                            <legend>File Upload</legend>
                            <label
                                htmlFor="file"
                                className="custom-file-upload">
                                Upload Song
                            </label>
                            <input
                                type="file"
                                id="file"
                                name="fileUpload"
                                onChange={handleChange}
                                multiple
                                required
                                aria-required="true"
                            />
                            <p>Maximum file size - 10MB</p>
                        </fieldset>
                        <fieldset>
                            <legend>
                                Tell us more about your song
                            </legend>
                            <textarea
                                id="additionalInfo"
                                name="additionalInfo"
                                rows="5"
                                cols="30"
                                value={formData.additionalInfo}
                                onChange={handleChange}></textarea>
                        </fieldset>
                        <button className="submit" type="submit">
                            Submit
                        </button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Contact
