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
  let url = process.env.REACT_APP_API_URL
  /* consulta productos */
  const [productos, setProductos] = useState([]);
  const [consultaProd, setConsultaProd] =useState(true)

useEffect(() => {
  consultarAPI()  
},[])

const consultarAPI = async() =>{
  try {
    const res = await fetch(url)
    const infor = await res.json()
    if(res.status ===200){
      setProductos(infor)
      setConsultaProd(false)
    }
  } catch (error) {
    console.log(error)
  }
}

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
                          setConsultaProd={setConsultaProd}
          />
        } 
        />
        <Route exact path='/productos/agregar' component={()=>
          <AgregarProducto setConsultaProd={setConsultaProd}
          />
        } 
        />
        <Route exact path='/productos/editar/:id' component={()=>
          <EditarProducto setConsultaProd={setConsultaProd}
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
