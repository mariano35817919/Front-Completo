import React from "react";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Pokemon3 from '../Assets/imagenes/pokedex/3-Squirtle.png';
import Pokemon8 from '../Assets/imagenes/pokedex/8-Wartortle.png';
import Pokemon9 from '../Assets/imagenes/pokedex/9-Blastoise.png';
import '../CSS/Pokemons.css';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';




function Squirtle() {
    return (
        <>
            <h1 >Squirtle</h1>
            

            <div className="container">


                <Card style={{ width: '18rem' }} className="border border-dark ">
                    <Card.Img variant="top" src={Pokemon3} />
                    <Card.Body className='text-dark '>
                        <Card.Title className="bg-body font-weight-bolder border border-white">Squirtle</Card.Title>
                        <Card.Text className='text-dark '>
                        Squirtle es un Pokémon de tipo Agua, conocido por su apariencia de tortuga y su caparazón robusto. Este Pokémon es uno de los tres Pokémon iniciales en la región de Kanto. 
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Altura: Aproximadamente 0.5 m</ListGroup.Item>
                        <ListGroup.Item>Peso: Alrededor de 9 kilogramos</ListGroup.Item>
                        <ListGroup.Item>Habilidad Especial: Torrente (Torrent)</ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card style={{ width: '18rem' }} className="border border-dark ">
                    <Card.Img variant="top" src={Pokemon8} />
                    <Card.Body className='text-dark '>
                        <Card.Title className="bg-body font-weight-bolder border border-white">Wartortle</Card.Title>
                        <Card.Text className='text-dark '>
                        Wartortle es la evolución intermedia de Squirtle y la segunda etapa de su línea evolutiva. Tiene orejas más grandes y su caparazón se ha vuelto más robusto
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Altura: Aproximadamente 1 metro</ListGroup.Item>
                        <ListGroup.Item>Peso: Alrededor de 22.5 kilogramos</ListGroup.Item>
                        <ListGroup.Item>Habilidad Especial: Torrente (Torrent)</ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card style={{ width: '18rem' }} className="border border-dark ">
                    <Card.Img variant="top" src={Pokemon9} />
                    <Card.Body className='text-dark '>
                        <Card.Title className="bg-body font-weight-bolder border border-white">Blastoise</Card.Title>
                        <Card.Text className='text-dark '>
                        Blastoise es la forma final de la línea evolutiva de Squirtle. Este Pokémon acuático ha evolucionado para convertirse en una imponente criatura con cañones de agua en su caparazón.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Altura: Aproximadamente 1.6 m</ListGroup.Item>
                        <ListGroup.Item>Peso: Alrededor de 85.5 kilogramos</ListGroup.Item>
                        <ListGroup.Item>Habilidad Especial: Torrente (Torrent)</ListGroup.Item>
                    </ListGroup>

                </Card>
                </div>
                <Link to="/pokemons"><Button variant="dark">volver</Button></Link>
                </>
    );
}


export default Squirtle;