import React, { useState } from "react";
import { useAuth } from "../src/AuthProvider";

export default function () {
  const auth = useAuth();

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const validateForm = (input) => {
    let errors = { username: "", password: "" };
    if (input.username.length < 4) {
      errors.username = "username is too short";
    }
    if (input.password.length < 3) {
      errors.password = "Password is too short";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm(input);
    if (error.username === "" && error.password === "") {
      auth.loginAuth(input);
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <br />
        <input
          type="text"
          onChange={(e) => setInput({ ...input, username: e.target.value })}
        />
        <br />
        <label>Password: </label>
        <br />
        <input
          type="password"
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
