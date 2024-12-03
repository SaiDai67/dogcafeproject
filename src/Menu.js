import React from "react";

function Menu() {
    const drinks = [
        { name: "Pawberry Lemonade", price: "$7.00" },
        { name: "Golden Retriever Espresso", price: "$5.50" },
        { name: "Corgi Cola", price: "$6.00" },
        { name: "Bulldog Chai", price: "$5.00" },
        { name: "Husky Hot Cocoa", price: "$3.50" },
        ];
        
        const food = [
        { name: "Pupcake", price: "$3.00" },
        { name: "Beagle Bagel", price: "$4.00" },
        { name: "Golden Bone Biscuit", price: "$6.00" },
        { name: "Dachshund Donut", price: "$7.50" },
        { name: "Shiba Sandwich", price: "$5.00" },
        ];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Menu 🐾</h1>
      <p>Check out our special drinks and treats for you and your furry friends!</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {/* Drinks Table */}
        <table style={{ borderCollapse: "collapse", width: "45%", border: "1px solid #ddd" }}>
          <thead>
            <tr style={{ backgroundColor: "#f4f4f4" }}>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Drink</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {drinks.map((drink, index) => (
              <tr key={index}>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{drink.name}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{drink.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Food Table */}
        <table style={{ borderCollapse: "collapse", width: "45%", border: "1px solid #ddd" }}>
          <thead>
            <tr style={{ backgroundColor: "#f4f4f4" }}>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Food</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {food.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.name}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Menu;
