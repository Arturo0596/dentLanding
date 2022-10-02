import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import './Valores.css'

const Valores = () => {
    return (
        <div className='content-valores'>
            <h2>NUESTROS VALORES</h2>
            <div className="grid-valores">
                <div className='valores-card'>
                    <h3>Profesionalidad</h3>
                    <AiOutlineStar className='valores-icon' />
                    <p>
                        Cuidamos de tu sonrisa ofreciéndote tratamientos de calidad.
                    </p>
                </div>
                <div className='valores-card'>
                    <h3>Profesionalidad</h3>
                    <AiOutlineStar className='valores-icon' />
                    <p>
                        Cuidamos de tu sonrisa ofreciéndote tratamientos de calidad.
                    </p>
                </div><div className='valores-card'>
                    <h3>Profesionalidad</h3>
                    <AiOutlineStar className='valores-icon' />
                    <p>
                        Cuidamos de tu sonrisa ofreciéndote tratamientos de calidad.
                    </p>
                </div><div className='valores-card'>
                    <h3>Profesionalidad</h3>
                    <AiOutlineStar className='valores-icon' />
                    <p>
                        Cuidamos de tu sonrisa ofreciéndote tratamientos de calidad.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Valores