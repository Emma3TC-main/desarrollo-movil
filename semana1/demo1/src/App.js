import logo from "./logo.svg";
import "./App.css";
import Ejercicio1 from "./components/Ejercicio1";
import Ejercicio3 from "./components/Ejercicio3";
import Ejercicio2 from "./components/Ejercicio2";
import Ejercicio4 from "./components/Ejercicio4";
import Ejercicio5 from "./components/Ejercicio5";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="ejercicios">
          <div className="bloque">
            <span>Ejercicio 1</span>
            <Ejercicio1 />
          </div>
          <div className="bloque">
            <span>Ejercicio 2</span>
            <Ejercicio2 />
          </div>
          <div className="bloque">
            <span>Ejercicio 3</span>
            <Ejercicio3 />
          </div>
          <div className="bloque">
            <span>Ejercicio 4</span>
            <Ejercicio4 />
          </div>
          <div className="bloque">
            <span>Ejercicio 5</span>
            <Ejercicio5 />
          </div>
        </div>
      </div>
      <footer className="footer">Emmanuel Misael Torres Centeno</footer>
    </>
  );
}

export default App;
