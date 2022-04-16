import { useReducer, useState } from "react";
import Modal from "./components/Modal";
import "./styles/app.css";

const App = () => {
  const [name, setName] = useState("");

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const newItem = [...state.cart, action.payload];
        return {
          ...state,
          cart: newItem,
          isModalOpen: true,
          modalContent: "Item added!",
          alert: "success",
        };
      case "EMPTY_VALUE":
        return {
          ...state,
          isModalOpen: true,
          modalContent: "Please enter some value!",
          alert: "danger",
        };
      case "REMOVE_ITEM":
        const filteredCart = state.cart.filter((item) => {
          if (item.id !== action.payload) {
            return item;
          }
        });
        return {
          ...state,
          cart: filteredCart,
          isModalOpen: true,
          modalContent: "Item removed!",
          alert: "danger",
        };
    }
    return state;
  };
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

  const closeModal = () => {};

  return (
    <section className="container">
      {state.isModalOpen && (
        <Modal
          modalContent={state.modalContent}
          alert={state.alert}
          closeModal={closeModal}
        />
      )}
      <article className="cart">
        <div className="title-div">
          <h2 className="title"> Cart app </h2>
        </div>
        <div className="inputs-div">
          <input
            id="input-field"
            type="text"
            placeholder="Enter item name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button id="add-btn" type="click" onClick={handleButton}>
            Add to cart{" "}
          </button>
        </div>
        <div className="items">
          {state.cart.length < 1 && (
            <h1 className="empty-list"> The list is empty</h1>
          )}
          {state.cart.map((item) => {
            const { id, name } = item;
            return (
              <article className="single-item" key={id}>
                <div className="name-div">{name}</div>
                <div className="buttons-div">
                  <button
                    id="single-item-btn"
                    type="click"
                    onClick={() => removeItem(id)}
                  >
                    Remove
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default App;
