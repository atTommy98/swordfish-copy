import "./index.css";
import url from "./videos/mountain-pass.mp4";

// Components
import ThreeCanvas from "./components/ThreeCanvas";
import Accelerometer from "./components/Accelerometer";

function App() {

  return (
    <div className="App">
      <ThreeCanvas url={url} />
      <Accelerometer />
    </div>
  );
}

export default App;