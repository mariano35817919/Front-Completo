import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../CSS/login.css";
import axios from 'axios';

import { useNavigate } from 'react-router-dom'; 


function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:9000/usuarios/login', {
                user: user,
                password: password
            });

            if (response.data.authenticated) {
                console.log('Usuario autenticado correctamente');
                
                navigate('/pokemons');
            } else {
                console.error('Error en la autenticación: Usuario no encontrado');
                setError('Usuario no encontrado o contraseña incorrecta');
                navigate('/registro');
            }
        } catch (error) {
            console.error('Error al procesar la solicitud:', error);
        }
    };

    return (
        <>
        <h1>Ingresa tus datos para iniciar sesión</h1>
        <p>Por favor, introduce tus credenciales para acceder a tu cuenta.</p>
        <div className='form-container'>
        <Form onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='text-white'>Nombre</Form.Label>
                <Form.Control
                    className='container'
                    type="text"
                    placeholder="Ash Ketchum"
                    style={{ width: '300px' }}
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <Form.Text className="text-muted">
                    Proporciona tu nombre de entrenador Pokémon.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='text-white'>Contraseña</Form.Label>
                <Form.Control
                    className='container'
                    type="password"
                    placeholder="Password"
                    style={{ width: '300px' }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Button variant="dark" type="submit">
                Iniciar sesión
            </Button>
        </Form>
        </div>
        </>
    );
}

export default Login;
