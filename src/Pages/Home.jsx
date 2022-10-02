import React from 'react'
import Navbar from '../Components/Navbar/Navabar'
import equipo from '../Assets/equipo.png'
import clinica from '../Assets/clinica.jpeg'
import cabezera from '../Assets/cabeceraHome.jpeg'
import implante from '../Assets/implante.jpeg'
import './Home.css'
import ContactNav from '../Components/contact-nav/ContactNav'
import Valores from '../Components/Valores/Valores'
import Footer from '../Components/Footer/Footer'

const Home = () => {
    return (
        <>
            <ContactNav />
            <Navbar />
            <div className='home-content'>
                <img src={cabezera} alt="" />

            </div>
            <div className='tratamientos'>
                <p className="title-trat">TRATAMIENTOS DENTALES</p>
                <span>NOMBRE DE LA CLÍNICA</span>
                <div className='trat-content'>
                    <div className='trat-1'>
                        <h3>Implantes / Cirugía
                        </h3>
                        <p>Contamos con la tecnología mas avanzada en implantología, que te permitirá sonreír, comer y hablar.
                        </p>
                        <img src={implante} alt="" />
                    </div>
                    <div className='trat-1'>
                        <h3>Implantes / Cirugía
                        </h3>
                        <p>Contamos con la tecnología mas avanzada en implantología, que te permitirá sonreír, comer y hablar.
                        </p>
                        <img src={implante} alt="" />
                    </div>
                    <div className='trat-1'>
                        <h3>Implantes / Cirugía
                        </h3>
                        <p>Contamos con la tecnología mas avanzada en implantología, que te permitirá sonreír, comer y hablar.
                        </p>
                        <img src={implante} alt="" />
                    </div>
                    <div className='trat-1'>
                        <h3>Implantes / Cirugía
                        </h3>
                        <p>Contamos con la tecnología mas avanzada en implantología, que te permitirá sonreír, comer y hablar.
                        </p>
                        <img src={implante} alt="" />
                    </div>
                </div>

            </div>
            <Valores />
            <Footer />
        </>
    )
}

export default Home