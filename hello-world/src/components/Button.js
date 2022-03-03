import "./Button.css";

const Button = (props) => {
  return (
    <input
      className="location-button"
      type="button"
      data-testid="button"
      value={props.location || 'All Locations'}
    ></input>
  );
};

export default Button;
