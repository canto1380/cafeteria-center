import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navegacion from './components/common/Nav'
function App() {
  return (
    <Router>
      <Navegacion/>
      <Switch>
        <Route exact path='/' component={()=>
          <Inicio/>
        } 
        />
        <Route exact path='/productos' component={()=>
          <ListaProductos/>
        } 
        />
        <Route exact path='/productos/agregar' component={()=>
          <AgregarProducto/>
        } 
        />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
