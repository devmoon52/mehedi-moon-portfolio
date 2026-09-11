import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward, IoIosCheckmarkCircle } from "react-icons/io";

const Accordion = ({ data, isOpen, setIndex }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight + "px");
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="bodyBG px-3 overflow-hidden rounded-md py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <IoIosCheckmarkCircle className="shrink-0" size={22} />
          <h2
            onClick={setIndex}
            className="cursor-pointer hover:underline select-none"
          >
            {data.title}
          </h2>
        </div>
        <span onClick={setIndex} className="cursor-pointer">
          <IoIosArrowForward
            size={22}
            className={`${isOpen ? "rotate-90" : "rotate-0"} transition-rotate duration-200`}
          />
        </span>
      </div>
      <div
        style={{ height }}
        ref={contentRef}
        className="h-0 overflow-hidden transition-all duration-200"
      >
        <p className="text-sm mt-3 text-gray-300">{data.desc}</p>
      </div>
    </div>
  );
};

export default Accordion;
