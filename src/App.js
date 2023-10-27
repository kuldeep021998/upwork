import DisplayData from "./DisplayData/DisplayData";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataError, fetchDataSuccess } from "./Store/Action";
import React, { useEffect, useState } from "react";
import Modal from "./DisplayData/Modal";
const App = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  console.log("page", page);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://randomuser.me/api/?page=${page}&results=10`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const fetchedData = await response.json();
        dispatch(fetchDataSuccess(fetchedData));
      } catch (error) {
        dispatch(fetchDataError(error.message));
      }
    };

    fetchData();
  }, [dispatch, page, search]);

  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.data.error);
  const isLoading = useSelector((state) => state.data.isLoading);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  console.log("search", search);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const openModal = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <input
          type="text"
          className="w-1/2 border rounded p-2"
          value={search}
          onChange={handleChange}
          placeholder="Search By name"
        />
      </div>
      <h1 className="font-bold text-center mb-8">Users</h1>
      {data.length === 0 ? (
        <div>No data available</div>
      ) : (
        <div class="container mx-auto lg:px-16 sm:px-8 xs:px-4">
          <div className="flex flex-wrap -mx-4 justify-center">
            {data.results.map((item, index) => (
              <DisplayData item={item} openModal={openModal} />
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center space-x-4 my-4">
        <button
          className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded focus:outline-none"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded focus:outline-none"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      {selectedUser && <Modal user={selectedUser} onClose={closeModal} />}
    </>
  );
};

export default App;
