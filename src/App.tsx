import "./index.css";
import { useState } from "react";

// Components

import Accelerometer from "./components/Accelerometer";
import PinInput from "./components/PinInput";
import Main from "./components/Main";

function App() {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [pinValid, setPinValid] = useState(false);

  return (
    <div className="App">
      {permissionGranted ? (
        pinValid ? (
          <Main />
        ) : (
          <PinInput pinValid={pinValid} setPinValid={setPinValid} />
        )
      ) : (
        <Accelerometer
          permissionGranted={permissionGranted}
          setPermissionGranted={setPermissionGranted}
        />
      )}
    </div>
  );
}

export default App;
