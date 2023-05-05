import "./App.css";
import { useState } from "react";

// QR
import { QrReader } from "react-qr-reader";

// Navigation
import { useNavigate } from "react-router-dom";

// Components
import ThreeCanvas from "./components/ThreeCanvas";

function App({ videoSrc }: IVideoProps) {
  const [isCameraControls, setIsCameraControls] = useState(true);

  const navigate = useNavigate();

  function handleScan(url: string) {
    navigate(`/${url}`, { replace: true });
  }

  return (
    <div className="App">
      <button
        className="button"
        onClick={() => setIsCameraControls(!isCameraControls)}
      >
        {isCameraControls ? "Camera Controlled" : "Device Controlled"}
      </button>
      <QrReader
        constraints={{ facingMode: 'environment', frameRate: 30 }}
        className="qr-reader"
        onResult={(res: any, err: any): void => {
          if (res) {
            handleScan(res.text);
          }
        }}
      />
      <div className="canvas">
        <ThreeCanvas isCameraControls={isCameraControls} videoSrc={videoSrc} />
      </div>
    </div>
  );
}

export default App;
