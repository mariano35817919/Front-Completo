import React from "react";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Pokemon1 from '../Assets/imagenes/pokedex/1-Bulbasaur.png';
import Pokemon4 from '../Assets/imagenes/pokedex/2-Ivysaur.png';
import Pokemon5 from '../Assets/imagenes/pokedex/3-Venusaur.png';
import '../CSS/Pokemons.css';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';





function Balbasaur() {
    return (
        <>
            <h1 >Bulbasaur</h1>

            <div className="container">

                <Card style={{ width: '18rem' }} className="border border-dark ">
                    <Card.Img variant="top" src={Pokemon1} />
                    <Card.Body className='text-dark '>
                        <Card.Title className="bg-body font-weight-bolder border border-white">Bulbasaur</Card.Title>
                        <Card.Text className='text-dark '>
                        Bulbasaur es un Pokémon de tipo Planta/Veneno, y es conocido como el Pokémon Semilla. Es el Pokémon inicial en la región de Kanto
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Altura: Aproximadamente 0.7 m</ListGroup.Item>
                        <ListGroup.Item>Peso: Alrededor de 6.9 kilogramos</ListGroup.Item>
                        <ListGroup.Item>Habilidad Especial: Espesura (Thick Fat)</ListGroup.Item>
                    </ListGroup>
                </Card>

                <Card style={{ width: '18rem' }} className="border border-dark ">
                    <Card.Img variant="top" src={Pokemon4} />
                    <Card.Body className='text-dark '>
                        <Card.Title className="bg-body font-weight-bolder border border-white">Ivysaur</Card.Title>
                        <Card.Text className='text-dark '>
                        Ivysaur es la evolución intermedia de Bulbasaur y la segunda etapa de su línea evolutiva. En esta fase, el bulbo en su espalda ha crecido y comenzado a florecer. 
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Altura: Aproximadamente 1 metro</ListGroup.Item>
                        <ListGroup.Item>Peso: Alrededor de 13 kilogramos</ListGroup.Item>
                        <ListGroup.Item>Habilidad Especial: Espesura (Thick Fat)</ListGroup.Item>
                    </ListGroup>
                </Card>

                <Card style={{ width: '18rem' }} className="border border-dark ">
                    <Card.Img variant="top" src={Pokemon5} />
                    <Card.Body className='text-dark '>
                        <Card.Title className="bg-body font-weight-bolder border border-white">Venusaur</Card.Title>
                        <Card.Text className='text-dark '>
                        Venusaur es la forma final de la línea evolutiva de Bulbasaur. Este imponente Pokémon ha alcanzado su máxima madurez y fuerza.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Altura: Aproximadamente 2 metros</ListGroup.Item>
                        <ListGroup.Item>Peso: Alrededor de 100 kilogramos</ListGroup.Item>
                        <ListGroup.Item>Habilidad Especial: Espesura (Thick Fat)</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
            <Link to="/pokemons"><Button variant="dark">volver</Button></Link>





        </>
    );
}


export default Balbasaur;