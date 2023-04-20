import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
  const { user, signup } = useAuth();

  const [data, setData] = useState({ email: "", password: "" });

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await signup(data.email, data.password);
    } catch (error) {
      console.log(error);
    }

    console.log(data);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-start mt-5">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <label>Email </label>
        <br />
        <input
          type="email"
          value={data.email}
          placeholder="Enter Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
        <br />
        <br />
        <label>Password </label>
        <br />
        <input
          type="password"
          value={data.password}
          placeholder="Enter Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          required
        />
        <br />
        <br />
        <input type="submit" className="btn btn-primary" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
