import './App.css';
import { WeatherProvider } from "./context/weatherApi"
import Container from "./components/container/container";

function App() {
  return (
    <div id="Application">
      <WeatherProvider>
        <Container />
      </WeatherProvider>
    </div>
  );
}

export default App;
