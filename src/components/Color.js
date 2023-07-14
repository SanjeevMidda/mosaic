import React, { useState } from "react";

const Color = ({ gridArea, color, time }) => {
  const [newColor, setNewColor] = useState({
    one: randomColor(),
    two: randomColor(),
    three: randomColor(),
  });

  let styles = {
    gridArea: gridArea,
    backgroundColor: `rgb(${newColor.one}, ${newColor.two}, ${newColor.three})`,
    transition: `all ${time}`,
  };

  function randomColor() {
    return Math.floor(Math.random() * 255);
  }

  function createNewColor() {
    setNewColor({
      ...newColor,
      one: randomColor(),
      two: randomColor(),
      three: randomColor(),
    });
  }

  setInterval(createNewColor, 1000);
  return <div style={styles} onClick={createNewColor} className="color"></div>;
};

export default Color;
