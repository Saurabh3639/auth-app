import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const SignIn = () => {
  const router = useRouter();
  const { user, signin } = useAuth();
  const [data, setData] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(user);

    try {
      await signin(data.email, data.password);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }

    console.log(data);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-start mt-5">
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
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
        <input type="submit" className="btn btn-primary" value="Sign In" />
      </form>
    </div>
  );
};

export default SignIn;
