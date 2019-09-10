// synchronous action creator
export const compareData = itemId => {
  return {
    type: "COMPARE",
    id: itemId
  };
};

// asynchronous action creator
export const fetchData = () => {
  return dispatch => {
    return fetch("data.json")
      .then(response => response.json())
      .then(json => dispatch({ type: "FetchData", data: json }));
  };
};
