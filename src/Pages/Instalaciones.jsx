import React from 'react'
import './Instalaciones.css'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navabar'
import InstalacionesBg from '../Assets/instalaciones.jpeg'
import it1 from '../Assets/it1.jpeg'
import it2 from '../Assets/it2.jpeg'
import it3 from '../Assets/it3.jpeg'
import it4 from '../Assets/it4.jpeg'
import Valores from '../Components/Valores/Valores'
import ContactNav from '../Components/contact-nav/ContactNav'





const Instalaciones = () => {
    return (
        <>
            <ContactNav />
            <Navbar />
            <div className='inst-content'>



                <img src={InstalacionesBg} alt="" />
                <span>  CONFIANZA Y CALIDAD DEFINEN NUESTRA CLÍNICA</span>

            </div>


            <div className='inst-cards' >
                <div className='cards-row'>
                    <div><img src={it1} alt="" /></div>

                    <div className='inst-texts'>


                        <p>Nuestra misión es conseguir que cada uno de nuestros pacientes se sienta orgulloso de su sonrisa.</p>
                        <p>Para ello, contamos con un equipo de especialistas con una amplia formación y experiencia que te ofrecerá en todo momento atención personalizada.</p>
                        <p>Nos adaptamos a tus necesidades y nos encargamos de que la calidad de los tratamientos que realizamos sea la más alta.</p>
                    </div>
                </div>

                <h3 className='inst-h3'>TU MEJOR OPCIÓN</h3>
                <div className='cards-row'>
                    <div><img src={it2} alt="" /></div>
                    <div className='inst-texts'>


                        <p>Nuestra misión es conseguir que cada uno de nuestros pacientes se sienta orgulloso de su sonrisa.</p>
                        <p>Para ello, contamos con un equipo de especialistas con una amplia formación y experiencia que te ofrecerá en todo momento atención personalizada.</p>
                        <p>Nos adaptamos a tus necesidades y nos encargamos de que la calidad de los tratamientos que realizamos sea la más alta.</p>
                    </div>
                </div>
                <h3 className='inst-h3'>TU MEJOR OPCIÓN</h3>
                <div className='cards-row'>
                    <div><img src={it3} alt="" /></div>

                    <div className='inst-texts'>


                        <p>Nuestras modernas instalaciones destacan por su luminosidad, sus espacios abiertos y sus sillones de última generación.</p>
                        <p>El estilo de nuestra clínica dental de Gijón está definido en base al confort de nuestros pacientes.</p>
                    </div>
                </div>
                <h3 className='inst-h3'>TU MEJOR OPCIÓN</h3>
                <div className='cards-row'>

                    <div><img src={it4} alt="" /></div>

                    <div className='inst-texts'>

                        <h3></h3>
                        <p>Nuestra misión es conseguir que cada uno de nuestros pacientes se sienta orgulloso de su sonrisa.</p>
                        <p>Para ello, contamos con un equipo de especialistas con una amplia formación y experiencia que te ofrecerá en todo momento atención personalizada.</p>
                        <p>Nos adaptamos a tus necesidades y nos encargamos de que la calidad de los tratamientos que realizamos sea la más alta.</p>
                    </div>
                </div>


            </div>



            <Valores />



            <Footer />
        </>
    )
}

export default Instalaciones
