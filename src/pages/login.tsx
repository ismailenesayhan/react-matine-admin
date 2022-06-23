import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
      <>
        <main>
          <h2>Login</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
        <Link to="/">Dashboard</Link>
        </nav>
      </>
    );
  }