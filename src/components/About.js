import React from 'react'
import './About.css';

function About() {
    return (
        <div className='about'>
            <div className ='aboutP'>
                <p className='tituloAbout'>SOBRE MI</p>
                <br />
                <p className='texto'>Hola! mi nombre es Mirka, soy estudiante de Ingeneria en Computación. Me gusta mucho la tecnologia, la playa y nadar. Me gradue del colegio Belga Guatemalteco de bachiller en computación, e trabajado en el area de soporte aplicativo y me gustaria ampliar mi experiencia :) </p>
                <br />
                <p className='tituloAbout'>SKILLS</p>
            </div>
            <div className='listaSkill'>
                <div className='lista'>
                    <ul>Lenguajes
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>javaScript</li>
                        <li>Python</li>
                        <li>Java</li>
                    </ul>
                </div>
                <div className='lista'>
                    <ul>Frameworks & Librerias
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Boostrap</li>
                        <li>React</li>
                        <li>jQuery</li>
                        <li>django</li>
                        <li>kivy</li>
                        <li>Pug</li>
                    </ul>
                </div>
                <div className='lista'>
                    <ul>Tecnologias 
                        <li>MongoDB</li>
                        <li>PostgresSQL</li>
                        <li>Firebase</li>
                        <li>Git</li>
                        <li>VSCode</li>
                        <li>PhotoShop</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
