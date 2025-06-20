import React, { useState } from "react";

function Myprofile() {
  const [keyValue, setkeyValue] = useState("");
  const arr = [{ ap: "kakinada,Vizag,Amaravati" }, { ts: "Hyd,Rangareddy" }];

  const handleclick = (e) => {
    setkeyValue(e.target.value);
  };

  // Find the selected object based on the keyValue
  const selectedObject = arr.find((obj) => Object.keys(obj)[0] === keyValue);
  const selectedValues = selectedObject
    ? selectedObject[keyValue].split(",")
    : [];

  return (
    <div className="container my-5 col-5 p-5 bg-warning-subtle">
      {/* First Dropdown */}
      <select onChange={handleclick}>
        <option value="">choose one</option>
        {arr.map((e, index) => {
          const key = Object.keys(e);
          return (
            <option key={index} value={key}>
              {key}
            </option>
          );
        })}
      </select>

      {/* Second Dropdown */}
      <select>
        {selectedValues.map((value, index) => (
          <option key={index}>{value}</option>
        ))}
      </select>
    </div>
  );
}

export default Myprofile;
