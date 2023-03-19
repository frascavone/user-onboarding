export const Input = (props) => {
  return (
    <div
      className={`form-control ${props.class} ${
        props.isValid === false ? 'invalid' : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {props.children}
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};
