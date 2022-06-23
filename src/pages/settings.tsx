import React from "react";
import { Link } from "react-router-dom";

export default function Settings() {
    return (
      <>
        <main>
          <h2>Settings</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
        <Link to="/">Dashboard</Link>
        </nav>
      </>
    );
  }