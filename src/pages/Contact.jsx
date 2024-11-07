import React from 'react'
import Contact from '../component/Contact'
import { Link } from 'react-router-dom'

const Contact_us = () => {
    return (

       <div className='contact-page'>
            <div className="contact-page-banner">
                <Link to="#">Home / <span> contact us</span>
                </Link>
                <h4>contact us</h4>
            </div>
            <h1>CONTACT</h1>
            <p>Fill the form below and one of our consultants will analyse your requirements and get back to you with a free analysis and proposal. Rank high & engage with the right audience to get success online. Contact us today!</p>
            <Contact />

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1751.2930368621478!2d77.37829!3d28.612192!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce53410ccf88f%3A0xef0f31fdb1143c1f!2sWebtech%20Solution!5e0!3m2!1sen!2sin!4v1726489103606!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Contact_us
