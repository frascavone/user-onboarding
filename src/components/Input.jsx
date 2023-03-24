export const Input = (props) => {
  return (
    <div
      className={`form-control ${props.class} ${
        props.isValid === false ? 'invalid' : ''
      }`}
    >
      {props.children}
      <label htmlFor={props.id}>
        {props.label}
        <input
          type={props.type}
          pattern={props.pattern}
          maxLength={props.maxLength}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </label>
      {props.id === 'email' && props.isValid === false && (
        <p id="invalid__message">Please insert a valid email.</p>
      )}
      {props.id === 'from' && props.isValid === false && (
        <p id="invalid__message">Please insert a valid number.</p>
      )}
      {props.id === 'to' && props.isValid === false && (
        <p id="invalid__message">Please insert a valid number.</p>
      )}
    </div>
  );
};
