import React from "react";
import { Button } from "./Button";
import { Header } from "./Header";

export const Landing = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <Button text="Create Survey" link="create-survey" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button text="Take Survey" />
    </div>
  );
};
