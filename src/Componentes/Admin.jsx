import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Administrador() {
    const [usuarios, setUsuarios] = useState([]);
    const [nuevosDatos, setNuevosDatos] = useState({ user: '', email: '' });

    const URL = 'http://localhost:9000/usuarios';

    const getUsuario = async () => {
        const { data } = await axios.get(URL);
        setUsuarios(data.usuarios);
    };

    const eliminarUsuario = async (id) => {
        try {
            await axios.delete(`http://localhost:9000/usuarios/${id}`);
            getUsuario();
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
        }
    };

    const actualizarUsuario = async (id) => {
        try {
            await axios.put(`http://localhost:9000/usuarios/${id}`, nuevosDatos);
            getUsuario();
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
        }
    };

    const handleChange = (e) => {
        setNuevosDatos({
            ...nuevosDatos,
            [e.target.name]: e.target.value,
        });
    };


    useEffect(() => {
        
        getUsuario();
    }, []);

    return (
        <>
            <h1 className="text-center mt-5 mb-5">Listado de entrenadores</h1>
            <div className="container">
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{usuario.user}</td>
                                <td>{usuario.email}</td>
                                <td>
                                    
                                    
                                    <Form>
                                        <Form.Group controlId={`formUsuario${index}`}>
                                            <Form.Control
                                                type="text"
                                                placeholder="Nuevo Nombre"
                                                name="user"
                                                onChange={handleChange}
                                            />
                                            <Form.Control
                                                type="text"
                                                placeholder="Nuevo Email"
                                                name="email"
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Form>

                                    <Button onClick={() => eliminarUsuario(usuario._id)} variant="outline-dark">
                                        Eliminar
                                    </Button>

                                    <Button onClick={() => actualizarUsuario(usuario._id)} variant="outline-dark">
                                        Actualizar
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                
            </div>
        </>
    );
}

export default Administrador;

