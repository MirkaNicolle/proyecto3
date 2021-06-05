import React from 'react'
import './App.css';
import Menu from './components/Menu';
import Contenido from './components/Contenido';
import About from './components/About';

function App() {
    return (
        <div className='App'>
            <Menu />
            <About />
            <Contenido />
        </div>
    )
}

export default App
