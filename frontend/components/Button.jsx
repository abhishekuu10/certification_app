import React from "react";

const Button = (props) => {
  let children = props.children;
  return (
    <button
      onClick={props.HandleCLick}
      className={`${props.width} p-2 text-lg border-solid border-2 border-black`}
    >
      {children}
    </button>
  );
};

export default Button;
