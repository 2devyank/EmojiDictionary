import React, { useState } from "react";
import "./styles.css";

const emojidict = {
  "😊": "smiling",
  "🤦🏾": "disbelief",
  "😞": "sad",
  "❤️": "turu lob",
  "😑": "annoyance",
  "🎃": "halloween"
};

export default function App() {
  const [name, setname] = useState("");
  const [meaning, setmeaning] = useState("translate");
  const table = Object.keys(emojidict);
  const handleclick = (item) => {
    const m = item;
    setmeaning(emojidict[m]);
  };
  const changehandler = (event) => {
    setname(event.target.value);
    const mean = event.target.value;
    if (mean in emojidict) {
      setmeaning(emojidict[mean]);
    } else {
      setmeaning("fail to recognize emogi");
    }

    // console.log(event.target.value);
  };
  return (
    <div className="App">
      <h1>Inside Out!</h1>
      <input onChange={changehandler} />
      <h2>{meaning}</h2>
      {table.map((item) => {
        return (
          <span onClick={() => handleclick(item)} style={{ padding: "1rem" }}>
            {item}
          </span>
        );
      })}
    </div>
  );
}
