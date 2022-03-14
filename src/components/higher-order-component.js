import { useRef } from "react";

function wrapWithUser(Component) {
  // Information that we don't want everything to access.
  const secretUserInfo = {
    name: localStorage.getItem("username"),
    password: localStorage.getItem("password")
  };

  // Return a newly generated React component
  // using a functional, stateless component.
  return function (props) {
    // Pass in the user variable as a property, along with
    // all the other props that we might be given.
    return <Component user={secretUserInfo} {...props} />;
  };
}

const AppHeader = function (props) {
  if (props.user.name) {
    return <h1 className="mb-4">Logged in as {props.user.name}</h1>;
  } else {
    return (
      <div className="mb-4">
        <h1>Login</h1>
        <p className="my-0">You need to login.</p>
      </div>
    );
  }
};

const ConnectedAppHeader = wrapWithUser(AppHeader);

export default function HigherOrderComponent() {
  const usernameEl = useRef(null);
  const passwordEl = useRef(null);

  const handleSubmit = function (e) {
    e.preventDefault();
    localStorage.setItem(usernameEl.current.name, usernameEl.current.value);
    localStorage.setItem(passwordEl.current.name, passwordEl.current.value);
    document.location.reload();
  };

  return (
    <div className="px-4">
      <div className="flex container mx-auto">
        <div className="component">
          <ConnectedAppHeader />
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" ref={usernameEl} />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" ref={passwordEl} />
            </div>
            <input
              type="submit"
              name="Submit"
              className="font-semibold rounded-full shadow-sm cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
