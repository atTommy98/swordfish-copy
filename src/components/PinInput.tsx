import { useState } from "react";

interface IProps {
  pinValid: boolean;
  setPinValid: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PinInput({ pinValid, setPinValid }: IProps) {
  const [pin, setPin] = useState<string>("");

  function verifyPin() {
    if (pin === "1234") {
      setPinValid(true);
    }
  }
  return (
    <div className="pin--container">
      <input
        onChange={(e) => setPin(e.target.value)}
        type="text"
        name="pin"
        className="pin--input"
      />
      <button onClick={verifyPin}>Enter</button>
    </div>
  );
}
