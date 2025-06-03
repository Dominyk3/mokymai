import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Baristų mokymų sistema</h1>
      <p>Čia bus visa pilna React versija su užduotimis, pažanga ir filtravimu.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
