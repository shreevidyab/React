// asynchronous action creator
export const fetchData = () => {
  return dispatch => {
    return fetch("data.json")
      .then(response => response.json())
      .then(json => dispatch({ type: "FETCH_DATA", data: json }));
  };
};

// synchronous action creator
export const compareData = itemId => {
  return {
    type: "COMPARE_DATA",
    data: itemId
  };
};
export const deleteData = itemId => {
  return {
    type: "DELETE_ITEM",
    data: itemId
  };
};
