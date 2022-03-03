import "./Button.css";

const Button = (props) => {
  return (
    <input
      className="location-button"
      type="button"
      data-testid="button"
      value={props.value}
    ></input>
  );
};

export default Button;
