const initialState = {
  cartItem: []
};

const cartItem = (state = initialState.cartItem, action) => {
  console.log("cartItem", action);
  switch (action.type) {
    case "ADD_TO_CART":
      /*if (state.indexOf(action.productId) !== -1) {
        return state;
      }*/
      state = state.concat(
        Array(action.payload.quantity).fill(action.payload.productId)
      );
      console.log("state cartItem", state);
      return state;
    default:
      return state;
  }
};

const getCartItem = (state) => state.cartItem;

const cart = (state = initialState, action) => {
  return {
    cartItem: cartItem(state.cartItem, action)
    //quantityById: quantityById(state.quantityById, action)
  };
};

export { getCartItem };
export default cart;
