import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import ClassDemo from "./components/class-demo";
import HooksDemo from "./components/hooks-demo";
import UsersList from "./components/users-list";
import CountdownClass from "./components/countdown-class";
import UsersListAxiosHooks from "./components/users-list-axios-hooks";

function App() {
  // Add name and path to add new menus to Navbar.
  const links = [
    { name: "Class", path: "/" },
    { name: "Hooks", path: "/hooks-demo" },
    { name: "Users", path: "/list-users" },
    { name: "AxiosHook", path: "/list-users-axios-hooks" },
    { name: "Countdown", path: "/countdown" }
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
          <Route path="/list-users" element={<UsersList />} />
          <Route path="/list-users-axios-hooks" element={<UsersListAxiosHooks />} />
          <Route path="/countdown" element={<CountdownClass />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
