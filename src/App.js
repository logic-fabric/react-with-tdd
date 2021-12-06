import { Confirmation } from "./components/Confirmation/Confirmation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Confirmation>
        All progress will be reset. Are you sure you wanna refresh the game?
      </Confirmation>
    </div>
  );
}

export default App;
