
import { useEffect, useRef } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const Up = () => {
  const arrowUp = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        arrowUp.current.style.opacity = "1";
        arrowUp.current.style.pointerEvents = "auto"; // Enable clicks when visible
      } else {
        arrowUp.current.style.opacity = "0";
        arrowUp.current.style.pointerEvents = "none"; // Disable clicks when hidden
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <div
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      ref={arrowUp}
      className="fixed bottom-[30px] right-[30px] opacity-0 pointer-events-none transition-all duration-300 rounded-full cursor-pointer bg-violet-600 hover:bg-violet-700 w-[50px] h-[50px] grid place-items-center shadow-lg hover:shadow-violet-500/50 hover:scale-110 z-[1000]"
    >
      <FaLongArrowAltUp className="text-white text-2xl" />
    </div>
  );
};

export default Up;
