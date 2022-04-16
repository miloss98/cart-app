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
    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
        modalContent: "",
        alert: "",
      };
  }
  return state;
};

export default reducer;
