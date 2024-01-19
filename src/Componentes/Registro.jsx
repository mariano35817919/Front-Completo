import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';



import "../CSS/registro.css"

function Registro() {

    const [Nombre, setNombre] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');




    const handleSubmit = async (e) => {
        e.preventDefault();

        
        console.log(`Nombre:${Nombre}`)
        console.log(`Email: ${Email}`)
        console.log(`Password: ${Password}`)

        try {
            //enviame aca a esta url , y seguido despues de la coma los datos
            const enviarDatos = await axios.post('http://localhost:9000/usuarios/crear', {
                user: Nombre,
                email: Email,
                password: Password
            })
            console.log(`respuesta: `, enviarDatos.mensaje)

            //al terminar de escribir vaciamos los imputs de datos
            setEmail('');
            setPassword('');
            setNombre('')

        }

        catch (error) {

            console.log(`tenemos un error en ${error}`)
        }


    }


    return (
        <>
            <h1>Llena los campos para registrarte</h1>
            
            <p>Por favor, completa los siguientes campos para crear tu cuenta.</p>
            <div className="form-container">
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='text-white'>Nombre</Form.Label>
                        <Form.Control type="text" className='container' placeholder="Ash Ketchum" style={{ width: '300px' }} value={Nombre} onChange={(e) => setNombre(e.target.value)} />
                        <Form.Text className="text-muted">
                            Proporciona tu nombre de entrenador Pokémon.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='text-white'>Dirección de Email</Form.Label>
                        <Form.Control type="email" className='container' placeholder="AshKetchum@gmail.com" style={{ width: '300px' }} value={Email} onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            Nunca compartiremos tu correo electrónico con nadie más.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-white'>Contraseña</Form.Label>
                        <Form.Control type="password" className='container' placeholder="Ingrese una Contraseña" style={{ width: '300px' }} value={Password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Button variant="dark" type="submit">
                        enviar datos
                    </Button>
                </Form>
            </div>
        </>

    );
}

export default Registro;


