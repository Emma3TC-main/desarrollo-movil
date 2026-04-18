import logo from "./logo.svg";
import "./App.css";
import { Componente1 } from "./components/Componente1";
import { Componente2 } from "./components/Componente2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Mi primer proyecto en React :D</p>
        <Componente1 />
        <Componente2 />
      </header>
    </div>
  );
}

export default App;
