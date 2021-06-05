import React from 'react'
import '../components/Contenido.css';

function Contenido() {
    return (
        <div className='contenido'>
            <p class='tituloContenido'>Experiencias</p>
            <div class='contenedor'>
                <p class='numero'>01.</p>
                <div className='calculadora'></div>
            </div>
            <div class='contenedor'>
                <p className='numero'>02.</p>
                <div className='css'></div>
            </div>
            <div class='contenedor'>
                <p className='numero'>03.</p>
                <div className='html'></div>
            </div>
            <div class='contenedor'>
                <p class='numero'>04.</p>
                <div className='memoria'></div>
            </div>
            <div class='contenedor'>
                <p class='numero'>05.</p>
                <div className='proyecto1'></div>
            </div>
            <div class='contenedor'>
                <p class='numero'>06.</p>
                <div className='proyecto2'></div>
            </div>
        </div>
    )
}

export default Contenido
