import "./Button.css";

const Button = (props) => {
  return (
    <input
      className="location-button"
      type="button"
      data-testid="button"
      value={props.location || "Head Office"}
      onClick={props.onClick}
    ></input>
  );
};

export default Button;
