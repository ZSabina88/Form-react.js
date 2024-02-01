import { useRef, useState } from "react";


export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const email = useRef();
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const emailIsValid = emailValue.includes("@");

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    };
    setEmailIsInvalid(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
