import axios from "axios";
import React, { useEffect, useReducer } from 'react'
const initialState = {
  loading: true,
  error: "",
  users: [],
};
const UseReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
      break;
    case "FETCH_ERROR":
      return {
        loading: false,
        user: [],
        error: "something wents wrong",
      };

    default:
      return state;
      break;
  }

};
const UseReducerEx = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  useEffect(() => {
    axios
      .get("https://api.github.com/users").then((res) => {
        dispatch({ type: "FETCH_USERS", payload: res.data });
      })
      .catch((error) => dispatch({ type: "FETCH_ERROR" }));
  }, []);
  return (
    <div>
      {state.loading
        ? "Loading"
        : state.users.map((x) => {
          return (
            <>
              <li>{x.login}</li>
            </>
          );
        })};
    </div>
  );
};

export default UseReducer;
