import React, { useState, useEffect, useRef} from 'react';
import { Button, Container, Form, Alert } from 'react-bootstrap';
import Swal from 'sweetalert2'
import {useParams, withRouter} from 'react-router-dom'

import {campoRequerido, rangoPrecio} from './helpers/helpers'

const EditarProducto = (props) => {
    const {consultarAPI} = props

    // Variables state
    const [categoria, setCategoria] = useState('')
    const [producto, setProducto] = useState({});
    const [error, setError] = useState(false)
    // const id = useParams().id
    const {id} = useParams();
    const url = process.env.REACT_APP_API_URL+'/'+id
    //  Variables ref
    const nombreRef = useRef("")
    const precioRef = useRef(0)


    useEffect(() => {
        const consultarProducto = async()=>{
            try {
                const res = await fetch(url)
                console.log(res)
                if(res.status === 200){
                    const resp = await res.json();
                    setProducto(resp);
                }
            } catch (error) {
                console.log(error)
            }
        }
        consultarProducto()
    }, [])
    

    const handleCategoria = (e) => {
        setCategoria(e.target.value)
    }
    const handleSubmit= async(e) =>{
        e.preventDefault()
        console.log(nombreRef.current.value)
        
        let categoriaModificada = (categoria === '')?(producto.categoria):(categoria);
        if(campoRequerido(nombreRef.current.value) && rangoPrecio(parseFloat(precioRef.current.value)) &&campoRequerido(categoriaModificada)){
            setError(false);
            try {
                const productoModificado ={
                    nombreProducto: nombreRef.current.value,
                    precio: precioRef.current.value,
                    categoria: categoriaModificada
                }
                const res = await fetch(url,{
                    method: "PUT",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify(productoModificado)
                })
                if(res.status === 200){
                    Swal.fire(
                        'Producto modificado!',
                        'El producto se modifico correctamente!',
                        'success'
                      )
                      consultarAPI()
                      props.history.push('/productos')
                }
            } catch (error) {
                console.log(error)
            }
        } else{
            setError(true)
        }
    }
    return (
        <Container>
            <Form className='mb-4' onSubmit={handleSubmit}>
                <h1 className="text-center my-5">Editar producto</h1>
                <Form.Group>
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control type='text' placeholder='Te' ref={nombreRef} defaultValue={producto.nombreProducto} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type='number' placeholder='50,00' ref={precioRef} defaultValue={producto.precio} />
                </Form.Group>
                <h3 className="text-center my-3">Categoria</h3>
                <div className='text-center justify-content-around'>
                    <Form.Check name='check-categoria' value="Bebida Caliente" inline type='radio' label='Bebida caliente' onChange={handleCategoria} defaultChecked={producto.categoria && producto.categoria === 'Bebida Caliente'}></Form.Check>

                    <Form.Check name='check-categoria' value="Bebida Fria" inline type='radio' label='Bebida fria' onChange={handleCategoria} defaultChecked={producto.categoria && producto.categoria === 'Bebida Fria'}></Form.Check>

                    <Form.Check name='check-categoria' value="Dulce" inline type='radio' label='Dulce' onChange={handleCategoria} defaultChecked={producto.categoria && producto.categoria === 'Dulce'}></Form.Check>

                    <Form.Check name='check-categoria' value="Salado" inline type='radio' label='Salado' onChange={handleCategoria} defaultChecked={producto.categoria && producto.categoria === 'Salado'}></Form.Check>
                </div>
                <Button variant='danger' type="submit" className="w-100 my-5" >Guardar</Button>
                {
                    (error) ? (<Alert variant="warning"> Error en los datos ingresados</Alert>) : (null)
                }

            </Form>
        </Container>
    );
};

export default withRouter (EditarProducto);