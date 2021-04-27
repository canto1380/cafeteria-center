import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Inicio from './components/Inicio'
import ListaProductos from './components/ListaProductos';
import AgregarProducto from './components/AgregarProducto';
import Navegacion from './components/common/Nav'
import Footer from './components/common/Footer';

function App() {
  return (
    <Router>
      <Navegacion/>
      <Switch>
        <Route exact path='/'>
          <Inicio/>
        </Route>
         
        <Route exact path='/productos'>
          <ListaProductos/>
          </Route> 
  
        <Route exact path='/productos/agregar'>
          <AgregarProducto/>
        </Route> 
      
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;