import { useEffect, useState } from "react";

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return { value, onChange: handleChange };
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

function useWindowResolution() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    // Return will clean-up the function.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width, height]);

  return { width, height };
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
