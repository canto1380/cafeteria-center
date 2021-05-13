import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import ItemProducto from './ItemProducto';

const ListaProductos = (props) => {
    const {productos} = props
    
    return (
        <Container>
        <h1 className="text-center my-5">Lista de Productos</h1>
        <ListGroup className='my-5'>
            {
                productos.map((producto)=> <ItemProducto producto={producto} key={producto._id} setConsultaProd={props.setConsultaProd}></ItemProducto>)
            }      
        </ListGroup>
      </Container>
    );
};

export default ListaProductos;