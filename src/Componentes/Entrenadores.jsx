import React from "react";
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import axios from 'axios';



function Entrenadores() {
    const [usuarios, setUsuarios] = useState([])

    const URL = 'http://localhost:9000/usuarios'
    

    const getUsuario = async () => {

        const { data } = await axios.get(URL);
        setUsuarios(data.usuarios);
        console.log(data.usuarios);


    }

    useEffect(() => {
        getUsuario();
    }, []);


    return (
        <>
            <h1 className="text-center mt-5 mb-5 ">Listado de entrenadores</h1>
            <div className="container">
                <Table striped="columns">
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Email</th>

                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{usuario.user}</td>
                                <td>{usuario.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}





export default Entrenadores;










