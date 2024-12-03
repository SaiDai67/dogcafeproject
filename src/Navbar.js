import React from "react";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f4f4f4", textAlign: "center" }}>
      <a href="/" style={{ margin: "0 15px", textDecoration: "none", color: "#333" }}>Home</a>
      <a href="/schedule" style={{ margin: "0 15px", textDecoration: "none", color: "#333" }}>Schedule</a>
      <a href="/menu" style={{ margin: "0 15px", textDecoration: "none", color: "#333" }}>Menu</a>
      <a href="/dog-info" style={{ margin: "0 15px", textDecoration: "none", color: "#333" }}>Dog Info</a>
    </nav>
  );
}

export default Navbar;
