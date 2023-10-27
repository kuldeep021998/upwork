import React from "react";

const Modal = (props) => {
  const { user, onClose } = props;
  return (
    <div className="fixed w-full inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="w-full sm:w-full xs:w-2/3 md:w-1/2 lg:w-1/4 px-2 mb-8 cursor-pointer opacity-1 active:opacity">
        <div class="bg-white rounded-lg shadow-md">
          <button
            onClick={onClose}
            className="absolute top-2 opacity-1 active:opacity-0 right-2 text-black-500 font-bold hover:text-red-500 focus:outline-none"
          >
            X
          </button>
          <img
            src={user.picture.large}
            alt="item"
            class="w-full h-40 object-cover rounded-t-lg"
          />
          <div class="p-4 flex flex-col gap-1">
            <h2 class="text-sm font-semibold text-gray-800 flex gap-2 xs:text-xs font-semibold text-gray-800 flex gap-1">
              <div>{user.name.title}.</div>
              <div>{user.name.first}</div>
              <div>{user.name.last}</div>
            </h2>

            <p class="text-gray-600 text-xs flex gap-1 items-center">
              <div className="font-light">Email:</div>
              <div className="">{user.email}</div>
            </p>

            <p class="text-gray-600 text-xs flex gap-1 items-center">
              <div className="font-light">Contact:</div>
              <div className="">{user.cell}</div>
            </p>

            <p class="text-gray-600 text-xs flex gap-1 items-center">
              <div className="font-light">Address:</div>
              <div className="">
                {user.location.street.number}, {user.location.street.name}
              </div>
            </p>
            <div className="flex justify-between items-center">
              <p class="text-gray-600 text-xs flex gap-1 items-center">
                <div className="font-light">City:</div>
                <div className="">{user.location.city}</div>
              </p>
              <p class="text-gray-600 text-xs flex gap-1 items-center">
                <div className="font-light">State:</div>
                <div className="">{user.location.state}</div>
              </p>
            </div>
            <p class="text-gray-600 text-xs flex gap-1 items-center">
              <div className="font-light">Postal Code:</div>
              <div className="">{user.location.postcode}</div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
