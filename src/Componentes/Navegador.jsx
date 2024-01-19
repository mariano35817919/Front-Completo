
import React from 'react';
import { Link } from "react-router-dom";
import "../CSS/Navegador.css";
import pokebola from "../Assets/iconos/pokebola2.png"



function Navegador() {
    return (
        <>
            <nav className="container">
                <Link to="./admin">
                <a href="#" className="logo">
                <img src={pokebola} alt="Logo" className="logo-image" />
                </a>
                </Link>
                <Link to="./">Home</Link>
                <Link to="./registro">Registro</Link>
                <Link to="./login">Login</Link>
                <Link to="./pokemons">Pokémons</Link>
                <Link to="./entrenadores">Entrenadores</Link>
                
            </nav>
            <hr />
        </>
    );
}








export default Navegador;