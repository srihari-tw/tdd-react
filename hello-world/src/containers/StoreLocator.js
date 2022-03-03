import Header from "../components/Header";
import Button from "../components/Button";
import Map from "../components/Map";
import { Fragment, useState } from "react";

const StoreLocator = () => {
  const locations = [
    { place: "Portland", address: "23445 Portland Drive" },
    { place: "Oregon", address: "4566 Oregon Blvd" },
    { place: "", address: "" },
  ];
  const [currentLocation, setCurrentLocation] = useState("");

  const renderLocations = () => {
    return (
      <Fragment>
        {locations.map((item, id) => {
          return (
            <Button
              key={id}
              location={item.place}
              onClick={() => {
                setCurrentLocation(item.place);
              }}
            />
          );
        })}
      </Fragment>
    );
  };
  return (
    <div data-testid="storeLocator">
      <Header />
      {renderLocations()}
      <Map location={currentLocation} />
    </div>
  );
};

export default StoreLocator;
