import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./styles/global.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Rental from "./Components/RentalSection/Rental";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Rental />
    </div>
  );
}

export default App;
