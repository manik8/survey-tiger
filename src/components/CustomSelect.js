import React, { Component } from "react";
import Select from "react-select";

export const CustonSelect = ({
  style,
  options,
  styles,
  defaultValue,
  onChange,
  isMulti,
}) => (
  <div style={style}>
    <Select
      defaultValue={defaultValue}
      styles={styles}
      options={options}
      onChange={onChange}
      isMulti={isMulti}
    />
  </div>
);
