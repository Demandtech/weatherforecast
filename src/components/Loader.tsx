import { BarLoader } from "react-spinners";

const Loader = ({ loading, color }: { loading: boolean; color: string }) => {
  return (
    <BarLoader color={color} height="4px" width="80px" loading={loading} />
  );
};

export default Loader;
