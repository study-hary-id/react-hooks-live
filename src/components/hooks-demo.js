import { useEffect, useState } from "react";

export default function HooksDemo(props) {
  const [name, setName] = useState("Agata");
  const [location, setLocation] = useState("Nairobi");
  const [resolution, setResolution] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  useEffect(() => {
    document.title = `${name} from ${location}`;

    const handleResize = () => {
      setResolution({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", handleResize);

    // Return will clean-up the function.
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  });

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
        <section>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={location}
            onChange={handleLocationChange}
          />
        </section>
      </form>
      <p>
        Hello {name} from {location} &nbsp;
        {resolution.width} x {resolution.height}
      </p>
    </section>
  );
}
