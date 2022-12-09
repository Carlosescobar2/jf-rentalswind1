import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./styles/global.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Rental from "./Components/RentalSection/Rental";
import Contact from "./Components/Contact/Contact";
import Info from "./Components/InfoSection/Info";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Info />
      <Rental />
      <Contact />
    </div>
  );
}

export default App;
