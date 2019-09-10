const intialState = {
  value: 0,
  data: null
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "FetchData":
      return { ...state, data: action.data };
    case "COMPARE":
      return { ...state, value: action.id };
    default:
      return state;
  }
};
export default reducer;
