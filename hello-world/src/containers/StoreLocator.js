import Header from "../components/Header";
import Button from "./Button";
import Map from "./Map";

const StoreLocator = () => {
  return (
    <div data-testid="storeLocator">
      <Header />
      <Button />
      <Button />
      <Map />
    </div>
  );
};

export default StoreLocator;
