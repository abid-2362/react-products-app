import React, {Component} from 'react';
/*
<div class="form-group has-danger">
  <label class="form-control-label" for="inputDanger1">Invalid input</label>
  <input type="text" value="wrong value" class="form-control is-invalid" id="inputInvalid">
  <div class="invalid-feedback">Sorry, that username's taken. Try another?</div>
</div>
*/
const TextInput = (props) => {
  let containerClass = 'form-group';
  let formControl = 'form-control';
  if (props.error) {
    containerClass += ' has-danger';
    formControl += ' is-invalid';
  }
  return(
    <div className={containerClass}>
      {/* <label htmlFor={props.name}>{props.label}</label> */}
      <input
        type="text" className={formControl}
        id={props.name} placeholder={props.label}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
      { props.error ? (<div className="invalid-feedback">{props.error}</div>) : '' }
      <small id={`${props.name}hlp`} className="form-text text-muted">{props.description}</small>
    </div>
  );
}

export default TextInput;