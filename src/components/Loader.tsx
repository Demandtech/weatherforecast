import { MagnifyingGlass } from "react-loader-spinner";

const Loader = () => {
  return (
    <MagnifyingGlass
      color="#5f94ff"
      glassColor="#ffffff"
      height="80"
      visible={true}
      width="80"
    />
  );
};

export default Loader;
