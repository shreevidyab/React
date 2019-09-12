const intialState = {
  value: 0,
  data: null
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, data: action.data };
    case "COMPARE_DATA":
      return { ...state, value: action.data };
    case "DELETE_ITEM":
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.data)
      };
    default:
      return state;
  }
};
export default reducer;
