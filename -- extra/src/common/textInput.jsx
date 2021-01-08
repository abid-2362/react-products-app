import React, {Component} from 'react';

const TextInput = (props) => {
  return(
    <div className="form-group">
      {/* <label htmlFor={props.name}>{props.label}</label> */}
      <input
        type="text" className="form-control"
        id={props.name} placeholder={props.label}
        name={props.name}
        onChange={props.onChange}
      />
      <small id={`${props.name}hlp`} className="form-text text-muted">{props.description}</small>
    </div>
  );
}

export default TextInput;