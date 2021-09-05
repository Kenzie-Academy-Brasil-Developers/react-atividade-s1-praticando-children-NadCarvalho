import "./App.css";
import CenteredCard from "./Components/CenteredCard";

function App() {
  return (
    <div className="App">
      <CenteredCard><h2>Children 1</h2></CenteredCard>
      <CenteredCard><h2>Children 2</h2></CenteredCard>
      <CenteredCard><h2>Children 3</h2></CenteredCard>
    </div>
  );
}

export default App;
