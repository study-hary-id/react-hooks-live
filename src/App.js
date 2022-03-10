import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import ClassDemo from "./components/class-demo";
import HooksDemo from "./components/hooks-demo";

function App() {
  // Add name and path to add new menus to Navbar.
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
      <Routes>
          {/* Add Route component to add new menus to Navbar. */}
          <Route path="/" element={<ClassDemo />} />
          <Route path="/hooks-demo" element={<HooksDemo />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
