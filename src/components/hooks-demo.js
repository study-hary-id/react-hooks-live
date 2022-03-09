import { useState } from "react";

export default function HooksDemo(props) {
  const [name, setName] = useState("Agata");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <section>
      <form autoComplete="off">
        <section>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </section>
      </form>

      <p>Hello, {name}!</p>
    </section>
  );
}
