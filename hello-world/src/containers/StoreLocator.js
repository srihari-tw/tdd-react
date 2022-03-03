import Header from "../components/Header";
import Button from "../components/Button";
import Map from "../components/Map";

const StoreLocator = () => {
  return (
    <div data-testid="storeLocator">
      <Header />
      <Button value="Store" />
      <Button value="Store" />
      <Map />
    </div>
  );
};

export default StoreLocator;
