import React, { useState } from 'react';
import { Button, Container, Form, Alert } from 'react-bootstrap';
import Swal from 'sweetalert2'

const AgregarProducto = (props) => {
    const {consultarAPI} = props;

    const url = process.env.REACT_APP_API_URL;
    const [nombreProd, setNombreProd] = useState('')
    const [precio, setPrecio] = useState(0)
    const [categoria, setCategoria] = useState('')

    const [error, setError] = useState(false)

    const handleCategoria = (e) => {
        setCategoria(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        /* Validacion */
        if (nombreProd.trim() === '' || precio <= 0 || categoria === '') {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2500);

        } else {
            setError(false)

            const producto = {
                nombreProducto: nombreProd,
                precio,
                categoria
            }

            try {
                const configuracion = {
                    method: "POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(producto)
                }
                const res = await fetch(url,configuracion)
                console.log(res)
                if(res.status === 201){
                    Swal.fire(
                        'Producto creado!',
                        'El producto ingresado se agrego correctamente!',
                        'success'
                      )
                      consultarAPI()
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (

        <Container>
            <Form className='mb-4' onSubmit={handleSubmit}>
                <h1 className="text-center my-5">Agregar producto nuevo</h1>
                <Form.Group>
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control type='text' placeholder='Te' onChange={(e) => setNombreProd(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type='number' placeholder='50,00' onChange={(e) => setPrecio(parseFloat(e.target.value))} />
                </Form.Group>
                <h3 className="text-center my-3">Categoria</h3>
                <div className='text-center justify-content-around'>
                    <Form.Check name='check-categoria' value="Bebida Caliente" inline type='radio' label='Bebida caliente' onChange={handleCategoria}></Form.Check>

                    <Form.Check name='check-categoria' value="Bebida Fria" inline type='radio' label='Bebida fria' onChange={handleCategoria}></Form.Check>

                    <Form.Check name='check-categoria' value="Dulce" inline type='radio' label='Dulce' onChange={handleCategoria} ></Form.Check>

                    <Form.Check name='check-categoria' value="Salado" inline type='radio' label='Salado' onChange={handleCategoria} ></Form.Check>
                </div>
                <Button variant='danger' type="submit" className="w-100 my-5" >Guardar</Button>
                {
                    (error) ? (<Alert variant="warning"> Error en los datos ingresados</Alert>) : (null)
                }

            </Form>
        </Container>
    );
};

export default AgregarProducto;