
import './App.css';
import Navegador from './Componentes/Navegador'; 
import Footer from './Componentes/Footer';
import { Routes,Route } from 'react-router-dom';
import Home from './Componentes/Home';
import Registro from './Componentes/Registro';
import Login from './Componentes/Login';
import Pokemons from './Componentes/Pokemons';
import Entrenadores from './Componentes/Entrenadores';
import Administrador from './Componentes/Admin';
import Balbasaur from './Componentes/Descripcion1';
import Charmander from './Componentes/Descripcion2';
import Squirtle from './Componentes/Descripcion3';
import './CSS/body.css'


function App() {
  return (
    <div className="App">
      <Navegador />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/pokemons' element={<Pokemons/>} />
        <Route path='/entrenadores' element={<Entrenadores/>} />
        <Route path='/admin' element={<Administrador/>} />
        <Route path='/balbasaur' element={<Balbasaur/>} />
        <Route path='/charmander' element={<Charmander/>} />
        <Route path='/squirtle' element={<Squirtle/>} />
        
        
      
      </Routes>
      <Footer/>









    </div>
  );
}

export default App;
