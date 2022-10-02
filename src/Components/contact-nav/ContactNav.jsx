import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import './ContactNav.css'

const ContactNav = () => {
  return (
    <div className='contact-nav-content'>
      <div className='flex-content-nav'>
        <FaFacebookF className='icons' />
        <FaInstagram className='icons' />
        <FaWhatsapp className="icons" />
        <span className='text-navContact'>info@nombreDelaClinica.es</span>
        <span className='text-navContact'>+34 985 144 884</span>
      </div>
    </div>
  )
}

export default ContactNav
