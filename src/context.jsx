import React, { useState, useReducer, useContext } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [name, setName] = useState("");
  //Reducer
  const initialState = {
    cart: [],
    isModalOpen: false,
    modalContent: "",
    alert: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleButton = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_TO_CART", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "EMPTY_VALUE" });
    }
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        state,
        removeItem,
        closeModal,
        handleButton,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
