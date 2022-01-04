import * as actionTypes from "./shopping-types";
import pasta from '../../img/pasta.jpg';
import dessert from '../../img/dessert.jpg';
import salad from '../../img/salad.jpg'

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Noodles",
      description:
        "Fill up your tummy with spicy noodles that will water your mouth, and leave you feeling relaxed",
      price: 15.0,
      image: pasta
        
    },
    {
      id: 2,
      title: "Dessert",
      description:
        "Desset to eat after a gret meal to end your day with delicious sweet taste :)",
      price: 20.0,
      image:dessert,
    },
    {
      id: 3,
      title: "Salad",
      description:
        "Fresh Salad from our farm to provide you with freshness and great health benefits also good to eat on diets",
      price: 150.0,
      image:salad,
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
