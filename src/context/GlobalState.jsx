import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};
// const initialState = {
//   transactions: [
//     { id: 1, text: "Flower", amount: -20 },
//     { id: 2, text: "Salary", amount: 300 },
//     { id: 3, text: "Book", amount: -10 },
//     { id: 4, text: "Camera", amount: 150 },
//   ],
// };

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  const handleAdd = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  {
    /* state is initialState
  state = transaction: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
  initialState = transaction: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
  AppReducer handle the state
*/
  }
  // console.log("this is state", state);
  // console.log("this is dispach", dispach);
  // console.log("this is AppReducer", AppReducer);
  // console.log("this is initialState", initialState);
  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, handleDelete, handleAdd }}>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = String;
