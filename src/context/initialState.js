import {
  fetchSessionUser,
  fetchSessionUserMode,
} from "../utils/fetchSessionData";

const sessionUser = fetchSessionUser();
const sessionUserMode = fetchSessionUserMode();
console.log(sessionUserMode);
export const initialState = {
  user: sessionUser,
  foodItems: null,
  showCart: false,
  showContactForm: false,
  cartItems: [],
  cartTotal: 0,
  adminMode: sessionUserMode,
  users: [],
  paymentMethod: "mobile_money",
  checkoutData: {},
};
