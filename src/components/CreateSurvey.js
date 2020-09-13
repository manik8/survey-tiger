import React, { useState } from "react";
import { Header } from "./Header";
import { CustonSelect } from "./CustomSelect";
import { CreateQuestion } from "./CreateQuestion";

export const CreateSurvey = () => {
  const options = [
    { value: "Multi Select", label: "Multi Select" },
    { value: "Single Select", label: "Single Select" },
  ];
  const style = {
    app: {
      background: "white",
      marginTop: "20px",
      justifyItems: "center",
      display: "grid",
      height: "20vh",
      fontFamily: "Arial",
      color: "black",
      gridTemplateColumns: "1fr",
      fontSize: 25,
    },
    select: {
      width: "50%",
    },
  };
  const [state, setState] = useState("");
  const colourStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#E3A34D" : null,
        color: "black",
      };
    },
  };

  const onChangeInput = (value) => {
    setState(value.value);
  };
  return (
    <>
      <Header />
      <div style={style.app}>
        <CustonSelect
          defaultValue={{
            value: "Select Question Type",
            label: "Select Question Type",
          }}
          style={style.select}
          options={options}
          styles={colourStyles}
          onChange={onChangeInput}
        />
        {state === "Multi Select" && <CreateQuestion />}
      </div>
    </>
  );
};
