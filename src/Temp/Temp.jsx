import React, { useState } from "react";

const TemperatureControl = () => {
  const [temperature, setTemperature] = useState(20);

  const handleIncrement = () => {
    setTemperature(temperature + 1);
  };

  const handleDecrement = () => {
    setTemperature(temperature - 1);
  };

  let backgroundColor = "yellow";
  if (temperature > 30 && temperature <= 50) {
    backgroundColor = "orange";
  } else if (temperature > 50) {
    backgroundColor = "red";
  }

  return (
    <div style={{ backgroundColor }}>
        <br/>
      <h1>Temperature: {temperature}°C</h1>
     <br />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default TemperatureControl;
