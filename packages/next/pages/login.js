import { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";

import Layout from "../components/ExternalLayout";

const Login = ({ message }) => {
  const [email, setEmail] = useState("admin@eskoolportal.com");
  const [password, setPassword] = useState("Passw0rd1!");

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", {
        email,
        password
      });
      console.info("Login successful.");
      Router.push("/");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const handleInputChange = setValue => e => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <Layout>
      <div>
        <h1 className="logo-name">esk+</h1>
      </div>
      <h3>Welcome to eskoolPortal</h3>
      <p>Please enter email and password.</p>
      <form className="m-t" role="form" onSubmit={handleLogin}>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            required
            onChange={handleInputChange(setEmail)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            required
            onChange={handleInputChange(setPassword)}
          />
        </div>
        <button type="submit" className="btn btn-primary block full-width m-b">
          Login
        </button>
      </form>
    </Layout>
  );
};

export async function getServerSideProps({ req, res }) {
  if (req.user) {
    // redirect if user exists
    res.writeHead(302, {
      Location: "/"
    });
    return res.end();
  }

  return {
    props: {}
  };
}

export default Login;