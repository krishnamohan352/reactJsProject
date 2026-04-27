import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            style={{
              padding: "10px",
              background: active === index ? "black" : "lightgray",
              color: active === index ? "white" : "black"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        {tabs[active].content}
      </div>
    </div>
  );
};

export default Tabs;