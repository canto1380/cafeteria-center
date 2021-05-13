import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState, useEffect} from 'react'

import Navegacion from './components/common/Nav'
import Footer from './components/common/Footer';
import Inicio from './components/Inicio'
import ListaProductos from './components/ListaProductos';
import AgregarProducto from './components/AgregarProducto';
import EditarProducto from './components/EditarProducto';
import Error404 from './components/Error404';

function App() {
  const url = process.env.REACT_APP_API_URL
const [productos, setProductos] = useState([]);

useEffect(() => {
  const consultarAPI = async() =>{
    try {
      const res = await fetch(url)
      const infor = await res.json()
      console.log(res)
      if(res.status ===200){
        setProductos(infor)
        console.log(infor)
      }
    } catch (error) {
      console.log(error)
    }
  }  
  consultarAPI()
  
},[])

  return (
    <Router>
      <Navegacion/>
      <Switch>
        <Route exact path='/' component={()=>
          <Inicio/>
        } 
        />
        <Route exact path='/productos' component={()=>
          <ListaProductos productos={productos}
                          consultarAPI={consultarAPI}
          />
        } 
        />
        <Route exact path='/productos/agregar' component={()=>
          <AgregarProducto consultarAPI={consultarAPI}
          />
        } 
        />
        <Route exact path='/productos/editar/:id' component={()=>
          <EditarProducto consultarAPI={consultarAPI}
          />
        } 
        />
        <Route exact path='*' component={()=>
          <Error404/>
        } 
        />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
