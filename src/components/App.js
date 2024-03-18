
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [weatherInput, setWeatherInput] = useState({tempreture: 25, conditions: "Sunny"});
  const [textColor, setTextColor] = useState("blue");

  useEffect(() => {
    if (weatherInput.tempreture > 20) {
      setTextColor("red");
    }
    else{
      setTextColor("blue");
    }
  }, [weatherInput.tempreture]);

  return (
    <div>
        {/* Do not remove the main div */}
        <div style = {{color: textColor}}>
          <p>Tempreture: {weatherInput.tempreture}</p>
          <p>conditions: {weatherInput.conditions}</p>
        </div>
    </div>
  )
}

export default App