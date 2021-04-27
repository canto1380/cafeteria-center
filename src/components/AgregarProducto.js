import React from 'react';
import { Container, Form } from 'react-bootstrap';

const AgregarProducto = () => {
    return (
        <Container>
            <Form className='mb-4'>
                <h1 className="text-center my-5">Agregar producto nuevo</h1>
                <Form.Group>
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control type='text' placeholder='Te'/>
                </Form.Group>
                <h3 className="text-center my-3">Categoria</h3>
                <div className='text-center justify-content-around'>
                    <Form.Check name='check-categoria' inline type='radio' label='Bebida caliente'></Form.Check>
                    <Form.Check name='check-categoria' inline type='radio' label='Bebida fria'></Form.Check>
                    <Form.Check name='check-categoria' inline type='radio' label='Dulce'></Form.Check>
                    <Form.Check name='check-categoria' inline type='radio' label='Salado'></Form.Check>
                </div>
            </Form>
        </Container>
    );
};

export default AgregarProducto;