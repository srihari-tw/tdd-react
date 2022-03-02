import logo from "../logo.svg";
import "./App.css";
import Header from "../components/Header";
import StoreLocator from "./StoreLocator";

function App() {
  return (
    <div className="App" data-testid="app">
      <header className="App-header">
        <StoreLocator />
      </header>
    </div>
  );
}

export default App;
