//import shop from '../api/shop'
//import * as types from '../constants/ActionTypes'
import database from "../data/database.json";

export { getAllProducts, addToCart };

const receiveProducts = (products) => ({
  type: "RECEIVE_PRODUCTS",
  products
});

const getAllProducts = () => (dispatch) => {
  dispatch(receiveProducts(database.products));
};

const addToCartUnsafe = (payload) => ({
  type: "ADD_TO_CART",
  payload: payload
});

const addToCart = (payload) => (dispatch) => {
  dispatch(addToCartUnsafe(payload));
};
