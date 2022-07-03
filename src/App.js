import logo from './neutro-06.png';
import './App.css';
import Buscador from './components/navbar/searcher';
import Menu from './components/navbar/navbar';
import Carrito from './components/navbar/cardWidget';
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Menu className="App-menu"/>
        <div className="App-header__search">
          <Buscador/>
          <Carrito/>
        </div>
      </header>
      <main>
        <ItemListContainer greeting="Hola Buen dia!"/>
      </main>
    </div>
  );
}

export default App;
