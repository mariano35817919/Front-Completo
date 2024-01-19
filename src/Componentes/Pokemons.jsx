import React from "react";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import '../CSS/Pokemons.css';
import Pokemon1 from '../Assets/imagenes/pokedex/1-Bulbasaur.png';
import Pokemon2 from '../Assets/imagenes/pokedex/2-Charmander.png';
import Pokemon3 from '../Assets/imagenes/pokedex/3-Squirtle.png';



import Button from 'react-bootstrap/Button';



function Pokemons() {
    return (
        <>
            <h1 >Pokemón inicial</h1>
        
            <p>Elige tu primer Pokémon y comienza tu viaje hacia la maestría Pokémon. ¡Atrévete a enfrentarte a gimnasios, capturar Pokémon salvajes y convertirte en el campeón de la región!</p>
            <p>Un Pokémon inicial (Starter Pokémon en inglés, はじめてのポケモン en japonés) es el Pokémon con el que un entrenador comienza su aventura. Muchos entrenadores prefieren tener en su equipo dicho Pokémon porque con él establecen una importante relación de amistad y confianza, o porque creen que es el mejor Pokémon para su aventura.</p>
            <p>Elige a tu primer compañero Pokémon entre tres opciones icónicas</p>

            <div className="container">

                <Card style={{ width: '18rem' }} className="border border-dark ">
                    <Card.Img variant="top" src={Pokemon1} />
                    <Card.Body className='text-dark '>
                        <Card.Title className="bg-body font-weight-bolder border border-white">Bulbasaur</Card.Title>
                        <Link to="/balbasaur"><Button variant="dark">Mostrar</Button></Link>
                    </Card.Body>
                </Card>
                    


                <Card style={{ width: '18rem' }} className='border border-dark'>
                    <Card.Img variant="top" src={Pokemon2} />
                    <Card.Body className='text-dark '>
                        <Card.Title className=' bg-body font-weight-bolder border border-white' >Charmander</Card.Title>
                        <Link to="/charmander"><Button variant="dark">Mostrar</Button></Link>
                    </Card.Body>
                </Card>


                <Card style={{ width: '18rem' }} className="border border-dark">
                    <Card.Img variant="top" src={Pokemon3} />
                    <Card.Body className='text-dark'>
                        <Card.Title className=' bg-body font-weight-bolder border border-white'>Squirtle</Card.Title>
                        <Link to="/squirtle"><Button variant="dark">Mostrar</Button></Link>
                    </Card.Body>
                </Card>

            </div>
        </>
    );
}




export default Pokemons;