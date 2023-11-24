import React, { useEffect, useState } from 'react'
import '../Form/FormStyles.css'

const CONTACTFORM = {
  firstName: '',
  lastName: '',
  email: '',
  message: ''
}

const Form = () => {
  const [contactForm, setContactForm] = useState(CONTACTFORM)

  const handleChange = (event) => {
    const { name, value} = event.target
    setContactForm({...contactForm, [name]: value})
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(contactForm)
    setContactForm(CONTACTFORM)
  }





  return (
    <div  className='Form'>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">First Name</label>
        <input type="text" placeholder='First Name' required name='firstName' value={contactForm.firstName} onChange={handleChange}/>

        <label htmlFor="">Last Name</label>
        <input type="text" placeholder='Last Name' required name='lastName' value={contactForm.lastName} onChange={handleChange}/>

        <label htmlFor="">Email</label>
        <input type="email" placeholder='Email' required name='email' value={contactForm.email} onChange={handleChange}/>

        <label htmlFor="">Message</label>
        <textarea name='message' id="" cols="30" rows="6" required  placeholder='Type your meassage here' value={contactForm.message} onChange={handleChange} ></textarea>

        <button className='btn'>Sumbit</button>
      </form>
    </div>
  )
}

export default Form
