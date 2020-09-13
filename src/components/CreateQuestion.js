import React, { useState } from "react";
import { CustonSelect } from "./CustomSelect";
import { Button } from "./Button";
import CreateOptions from "./CreateOptions";

export const CreateQuestion = () => {
  const options = [
    { value: "WhatsApp", label: "WhatsApp" },
    { value: "Facebook", label: "Facebook" },
    { value: "Twitter", label: "Twitter" },
    { value: "Instagram", label: "Instagram" },
  ];
  const [state, setState] = useState(0);
  const style = {
    app: {
      background: "white",
      marginTop: "20px",
      justifyItems: "center",
      display: "grid",
      height: "20vh",
      fontFamily: "Arial",
      color: "green",
      gridTemplateColumns: "2fr",
      fontSize: 25,
    },
    select: {
      width: "500px",
    },
  };
  const colourStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isFocused ? "#E3A34D" : null,
        color: "black",
      };
    },
  };

  return (
    <>
      <div className="header-question">
        <div className="question-mark">?</div>
        <input type="text" size="70" className="question" />
      </div>
      <h2>Options</h2>
      <CreateOptions />
    </>
  );
};
