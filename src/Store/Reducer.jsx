const initialState = {
  data: [],
  error: null,
  isLoading: true,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
        error: null,
        isLoading: false,
      };
    case "FETCH_DATA_ERROR":
      return {
        ...state,
        data: null,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default Reducer;


