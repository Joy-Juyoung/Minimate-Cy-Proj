import React from "react";

const Buttons = ({ title, containerStyles, iconLeft, iconRight, type, onClick, iconStyles }) => {
  return (
    <button onClick={onClick} type={type || "button"} className={`inline-flex items-center ${containerStyles} `}>
      {/* ex) iconLeft={<IoMdSettings/>} */}
      {iconLeft && <div className={`${iconStyles}`}>{iconLeft}</div>}

      {title}

      {iconRight && <div className={`${iconStyles}`}>{iconRight}</div>}
    </button>
  );
};
export default Buttons;
