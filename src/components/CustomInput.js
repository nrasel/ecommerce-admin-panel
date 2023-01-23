import React from "react";

const CustomInput = (props) => {
  const { type, placeholder, i_id, label, i_class } = props;
  return (
    <div>
      <div className="form-floating mb-3">
        <input
          type={type}
          className={`form-control ${i_class}`}
          id={i_id}
          placeholder={placeholder}
        />
        <label htmlFor={label}>{label}</label>
      </div>
    </div>
  );
};

export default CustomInput;
