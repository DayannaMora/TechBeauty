import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal, ModalBody, ModalFooter, FormGroup, ModalHeader } from 'reactstrap';

import Footer from '../Generic/Footer'; // Importar componente de pie de página
import './Multas.css'; // Importar archivo de estilos CSS personalizado

const Novedades = () => {
    const [data, setData] = useState([]);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [form, setForm] = useState({
        id: '',
        remNovedades: '',
        tipoNovedad: '',
        asuntoNovedades: '',
        descNovedades: '',
        docNovedades: '',
        fecNovedades: '',
        resNovedades: '',
        estNovedades: ''
    });

    useEffect(() => {
        peticionGet();
    }, []);

    const peticionGet = () => {
        axios.get('http://localhost:8085/api/news/all')
            .then(response => {
                setData(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleChange = async e => {
        e.persist();
        await setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        console.log(form);
    }

    const toggleModalInsertar = () => {
        setModalInsertar(!modalInsertar);
    }

    const seleccionarNovedad = (novedad) => {
        setForm({
            id: novedad.id,
            remNovedades: novedad.remNovedades,
            tipoNovedad: novedad.tipoNovedad,
            asuntoNovedades: novedad.asuntoNovedades,
            descNovedades: novedad.descNovedades,
            docNovedades: novedad.docNovedades,
            fecNovedades: novedad.fecNovedades,
            resNovedades: novedad.resNovedades,
            estNovedades: novedad.estNovedades
        });
    }

    const peticionPost = async () => {
        await axios.post('http://localhost:8085/api/news/create', form)
            .then(response => {
                toggleModalInsertar();
                peticionGet();
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    const peticionPut = () => {
        axios.put(http://localhost:8085/api/news/update/${form.id}, form)
            .then(response => {
                toggleModalInsertar();
                peticionGet();
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    const peticionDelete = () => {
        axios.delete(http://localhost:8085/api/news/delete/${form.id})
            .then(response => {
                setModalEliminar(false); // Cerrar el modal después de eliminar
                peticionGet();
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    return (
        <>
             {/* Componente de menú */}
            <div>
                <Button color="success" onClick={toggleModalInsertar}>Insertar</Button>
                <br /><br />

                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Remitente</th>
                            <th>Tipo</th>
                            <th>Asunto</th>
                            <th>Descripción</th>
                            <th>Documento</th>
                            <th>Fecha</th>
                            <th>Respuesta</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(novedad => (
                            <tr key={novedad.id}>
                                <td>{novedad.id}</td>
                                <td>{novedad.remNovedades}</td>
                                <td>{novedad.tipoNovedad}</td>
                                <td>{novedad.asuntoNovedades}</td>
                                <td>{novedad.descNovedades}</td>
                                <td>{novedad.docNovedades}</td>
                                <td>{novedad.fecNovedades}</td>
                                <td>{novedad.resNovedades}</td>
                                <td>{novedad.estNovedades}</td>
                                <td>
                                    <Button color="primary" onClick={() => { seleccionarNovedad(novedad); toggleModalInsertar(); }}>Editar</Button>{" "}
                                    <Button color="danger" onClick={() => { seleccionarNovedad(novedad); setModalEliminar(true); }}>Eliminar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Modal isOpen={modalInsertar} toggle={toggleModalInsertar}>
                    <ModalHeader toggle={toggleModalInsertar}>
                        <span>{form.id ? 'Actualizar novedad' : 'Insertar nueva novedad'}</span>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label htmlFor="remNovedades">Remitente</label>
                            <input className="form-control" type="text" name="remNovedades" id="remNovedades" onChange={handleChange} value={form.remNovedades} />
                            <br />
                            <label htmlFor="tipoNovedad">Tipo</label>
                            <input className="form-control" type="text" name="tipoNovedad" id="tipoNovedad" onChange={handleChange} value={form.tipoNovedad} />
                            <br />
                            <label htmlFor="asuntoNovedades">Asunto</label>
                            <input className="form-control" type="text" name="asuntoNovedades" id="asuntoNovedades" onChange={handleChange} value={form.asuntoNovedades} />
                            <br />
                            <label htmlFor="descNovedades">Descripción</label>
                            <input className="form-control" type="text" name="descNovedades" id="descNovedades" onChange={handleChange} value={form.descNovedades} />
                            <br />
                            <label htmlFor="docNovedades">Documento</label>
                            <input className="form-control" type="text" name="docNovedades" id="docNovedades" onChange={handleChange} value={form.docNovedades} />
                            <br />
                            <label htmlFor="fecNovedades">Fecha</label>
                            <input className="form-control" type="text" name="fecNovedades" id="fecNovedades" onChange={handleChange} value={form.fecNovedades} />
                            <br />
                            <label htmlFor="resNovedades">Respuesta</label>
                            <input className="form-control" type="text" name="resNovedades" id="resNovedades" onChange={handleChange} value={form.resNovedades} />
                            <br />
                            <label htmlFor="estNovedades">Estado</label>
                            <input className="form-control" type="text" name="estNovedades" id="estNovedades" onChange={handleChange} value={form.estNovedades} />
                            <br />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        {form.id ?
                            <Button color="primary" onClick={peticionPut}>Actualizar</Button> :
                            <Button color="primary" onClick={peticionPost}>Insertar</Button>
                        }
                        <Button color="secondary" onClick={toggleModalInsertar}>Cancelar</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={modalEliminar} toggle={() => setModalEliminar(false)}>
                    <ModalBody>
                        ¿Estás seguro que deseas eliminar la novedad: {form.asuntoNovedades}?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={peticionDelete}>Sí</Button>
                        <Button color="secondary" onClick={() => setModalEliminar(false)}>No</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <Footer /> {/* Componente de pie de página */}
        </>
    );
}

export default Novedades;