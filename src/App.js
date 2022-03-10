import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import ClassDemo from "./components/class-demo";
import HooksDemo from "./components/hooks-demo";

function App() {
  const links = [
    { name: "Class", path: "/" },
    { name: "Hooks", path: "/hooks-demo" }
  ];

  return (
    <Router>
      <header>
        <Navbar links={links} />
      </header>
      <main>
        Hello, World!
      </main>
    </Router>
  );
}

export default App;
