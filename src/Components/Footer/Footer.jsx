import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import logo from '../../Assets/logo.png'

const Footer = () => {

    var today = new Date();
    var year = today.getFullYear();


    return (
        <footer>
            <div className='footer-content'>
                <div className='footer-columns'>

                    <img src={logo} alt="" />

                    <Link>AVISO LEGAL</Link>
                    <Link>POLÍTICA DE COOKIES</Link>
                    &copy; Master JavaScript React.js {year}

                </div>
                <div className='footer-columns'>
                    <Link>INICIO</Link>
                    <Link>IMPLANTES / CIRUGÍA</Link>
                    <Link>ENDODONCIA</Link>
                    <Link>PERIODONCIA</Link>
                    <Link>ODONTOLOGÍA GENERAL</Link>
                    <Link>PRÓTESIS / REHABILITACIÓN</Link>
                    <Link>DENTISTA INFANTIL</Link>
                    <Link>TRABAJA CON NOSOTROS</Link>
                    <Link>CONTACTO</Link>

                </div>
                <div className='footer-columns'>

                    <h3>SÍGUENOS EN NUESTRAS RR.SS.</h3>
                    <div className='icons-content'>
                        <BsFacebook className='footer-icons' />
                        <BsInstagram className='footer-icons' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
