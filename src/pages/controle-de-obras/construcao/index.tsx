import ConstructionScreen from "./screen";

const ConstructionController = () => {
  const location = window?.location?.href?.split("?")
 
  return <ConstructionScreen id={Number(location?.[1] || 1)} />;
};

export default ConstructionController;
