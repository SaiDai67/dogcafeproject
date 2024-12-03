import React from "react";
import Judy from "./Judy.png"; // Import the Judy image from the src directory

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Dog Café 🐾</h1>
      <p>Enjoy coffee with your adorable friends!</p>
      <p>Set your appointment today!</p>

      <h2>Hours</h2>
      <p>
        Monday: 7am-8pm <br />
        Tuesday: 7am-8pm <br />
        Wednesday: 7am-8pm <br />
        Thursday: 7am-8pm <br />
        Friday: 7am-9pm <br />
        Saturday: 10am-10pm <br />
        Sunday: 10am-6pm
      </p>

      <div style={{ marginTop: "20px" }}>
        <h2>Meet Judy! 🐕</h2>
        <img
          src={Judy}
          alt="Judy the dog"
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <p style={{ fontStyle: "italic", marginTop: "10px" }}>
          "Judy loves to greet every guest with a wagging tail!"
        </p>
      </div>
    </div>
  );
}

export default Home;