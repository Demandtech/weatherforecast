import { useGlobalContext } from "@/hooks/useGlobalhook";

const ErroModal = () => {
  const { error, closeModal } = useGlobalContext();

  if (error.show) {
    return (
      <div
        className="fixed top-0 right-0 left-0 bottom-0 bg-[#00000000] grid place-content-center"
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
      >
        <div className="relative h-40 flex items-center px-5 bg-white rounded-lg">
          <button
            className="absolute right-5 top-2 text-red-600 btn text-2xl "
            onClick={() => closeModal()}
          >
            &times;
          </button>
          {error.msg}
        </div>
      </div>
    );
  }

  return <div />;
};

export default ErroModal;
