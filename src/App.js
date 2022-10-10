import './App.css';
import { WeatherProvider } from "./context/weatherApi"
import Container from "./components/container/container";

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Container />
      </WeatherProvider>
    </div>
  );
}

export default App;
