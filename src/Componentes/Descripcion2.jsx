import React from "react";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Pokemon2 from '../Assets/imagenes/pokedex/2-Charmander.png';
import Pokemon6 from '../Assets/imagenes/pokedex/5-Charmeleon.png';
import Pokemon7 from '../Assets/imagenes/pokedex/6-Charizard.png';
import '../CSS/Pokemons.css';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';





function Charmander() {
    return (
        <>
            <h1 >Charmander</h1>
            

            <div className="container">


                <Card style={{ width: '18rem' }} className="border border-dark ">
                    <Card.Img variant="top" src={Pokemon2} />
                    <Card.Body className='text-dark '>
                        <Card.Title className="bg-body font-weight-bolder border border-white">Charmander</Card.Title>
                        <Card.Text className='text-dark '>
                        Charmander es un Pokémon de tipo Fuego, conocido por su pequeño cuerpo de reptil y su cola en llamas. Este Pokémon es uno de los tres Pokémon iniciales de la región de Kanto. 
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Altura: Aproximadamente 0.6 metros</ListGroup.Item>
                        <ListGroup.Item>Peso: Alrededor de 8.5 kilogramos</ListGroup.Item>
                        <ListGroup.Item>Habilidad Especial: Mar Llamas (Blaze)</ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card style={{ width: '18rem' }} className="border border-dark ">
                    <Card.Img variant="top" src={Pokemon6} />
                    <Card.Body className='text-dark '>
                        <Card.Title className="bg-body font-weight-bolder border border-white">Charmeleon</Card.Title>
                        <Card.Text className='text-dark '>
                        Charmeleon es la evolución intermedia de Charmander y la segunda etapa de su línea evolutiva. En esta fase, Charmeleon se vuelve más grande y adquiere rasgos más agresivos. 
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Altura: Aproximadamente 1.1 metros</ListGroup.Item>
                        <ListGroup.Item>Peso: Alrededor de 19 kilogramos</ListGroup.Item>
                        <ListGroup.Item>Habilidad Especial: Mar Llamas (Blaze)</ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card style={{ width: '18rem' }} className="border border-dark ">
                    <Card.Img variant="top" src={Pokemon7} />
                    <Card.Body className='text-dark '>
                        <Card.Title className="bg-body font-weight-bolder border border-white">Charizard</Card.Title>
                        <Card.Text className='text-dark '>
                        Charizard es la forma final de la línea evolutiva de Charmander. Este majestuoso Pokémon combina la ferocidad de un dragón con la capacidad de volar. Su llama en la cola arde con una intensidad impresionante. 
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Altura: Aproximadamente 1.7 metros</ListGroup.Item>
                        <ListGroup.Item>Peso: Alrededor de 90.5 kilogramos</ListGroup.Item>
                        <ListGroup.Item>Habilidad Especial: Mar Llamas (Blaze)</ListGroup.Item>
                    </ListGroup>
                </Card>
                </div>
                <Link to="/pokemons"><Button variant="dark">volver</Button></Link>
                </>
    );
}


export default Charmander;