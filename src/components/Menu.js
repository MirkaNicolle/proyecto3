import React from 'react'
import '../components/Menu.css';

function Menu() {
    return (
        <div className='pagina'>
            <div className = 'menuc'>
                <div className='menup'>
                    <a href = "https://github.com/MirkaNicolle?tab=repositories"><div className= 'github'></div></a>
                    <a href ="https://www.linkedin.com/in/mirka-monz%C3%B3n-208412157/"><div className= 'linkedin'></div></a>
                    <a href="mailto:mirkanicolle@gmail.com"><div className= 'gmail'></div></a>
                </div>
            </div>
            <div className='bienvenida'>
                <div class='sign'>
                    <p class='fast-flicker'>PORTAFOLIO</p>
                </div>
                <br />
                <div class="typing-demo">Mirka Monzon.
                </div>
            </div>
        </div>
    )
}

export default Menu
