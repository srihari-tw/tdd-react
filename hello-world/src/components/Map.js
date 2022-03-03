import mapChooser from "../mapChooser";
import "./Map.css";

const Map = (props) => {
  return (
    <div className="map-box" data-testid="map">
      <img
        alt={props.location}
        src={`images/${mapChooser(props.location)}`}
        data-testid="img"
      />
    </div>
  );
};

export default Map;
