import React from "react";

function Schedule() {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = 30; // Number of days in the month
  const firstDay = 3; // Day of the week the month starts on (0=Sun, 1=Mon, ..., 6=Sat)
  const dogs = [
    "Judy",
    "Max",
    "Bella",
    "Charlie",
    "Lucy",
    "Cooper",
    "Daisy",
    "Milo",
    "Luna",
    "Buddy",
    "Rocky",
    "Zoe",
    "Lola",
    "Bear",
    "Sadie",
  ];

  // Randomly assign dogs to days
  const dogSchedule = [];
  for (let i = 0; i < daysInMonth; i++) {
    const randomDogs = new Set();
    while (randomDogs.size < 2) {
      const randomIndex = Math.floor(Math.random() * dogs.length);
      randomDogs.add(dogs[randomIndex]);
    }
    dogSchedule.push([...randomDogs]);
  }

  const calendar = [];
  for (let i = 0; i < firstDay; i++) {
    calendar.push(null); // Empty slots for days before the first day
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendar.push({ day: i, dogs: dogSchedule[i - 1] });
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Schedule 🗓️</h1>
      <p>Check out the dog lineup for each day this month!</p>
      <table
        style={{
          margin: "0 auto",
          borderCollapse: "collapse",
          width: "80%",
          maxWidth: "500px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            {daysOfWeek.map((day, index) => (
              <th
                key={index}
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: Math.ceil(calendar.length / 7) }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {calendar
                .slice(rowIndex * 7, rowIndex * 7 + 7)
                .map((entry, colIndex) => (
                  <td
                    key={colIndex}
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      textAlign: "center",
                      backgroundColor: "#fff",
                    }}
                  >
                    {entry ? (
                      <>
                        <strong>{entry.day}</strong>
                        <ul style={{ listStyle: "none", padding: 0, margin: "5px 0" }}>
                          {entry.dogs.map((dog, idx) => (
                            <li key={idx} style={{ fontSize: "12px" }}>
                              {dog}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      ""
                    )}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;