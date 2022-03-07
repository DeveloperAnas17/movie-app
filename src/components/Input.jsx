import React from "react";

const Input = (props) => {
  return (
    <input
      className=" border-none bg-black px-2 py-1 text-lg rounded-3xl text-white"
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange ? (e) => props.onChange(e) : null}
    />
  );
};

export default Input;
