import React, { useEffect } from "react";

const DisplayData = (props) => {
  const { item, openModal } = props;

  const size = window.innerWidth;

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 430px)").matches) {
        window.location.reload();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      onClick={() => openModal(item)}
      className="w-full sm:w-1/2 xs:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-8 cursor-pointer opacity-1 active:opacity"
    >
      <div class="bg-white rounded-lg shadow-md">
        <img
          src={item.picture.large}
          alt="item"
          class="w-full h-40 object-cover rounded-t-lg"
        />
        <div class="p-4 flex flex-col gap-1">
          <h2 class="text-sm font-semibold text-gray-800 flex gap-2 xs:text-xs font-semibold text-gray-800 flex gap-1">
            <div>{item.name.title}.</div>
            <div>{item.name.first}</div>
            <div>{item.name.last}</div>
          </h2>
          {size < 430 ? null : (
            <p class="text-gray-600 text-xs flex gap-1 items-center">
              <div className="font-light">Email:</div>
              <div className="">{item.email}</div>
            </p>
          )}
          <p class="text-gray-600 text-xs flex gap-1 items-center">
            <div className="font-light">Contact:</div>
            <div className="">{item.cell}</div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
