import "./App.css";
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
