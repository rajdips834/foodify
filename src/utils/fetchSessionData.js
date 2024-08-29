import { firebaseGetAllUsers } from "../Firebase";

export const fetchSessionUser = () => {
  const user = localStorage.getItem("user");

  if (user && user !== "undefined") {
    return JSON.parse(user);
  } else {
    localStorage.removeItem("user"); // Clear only the specific item
    return null; // Or handle this case differently if needed
  }
};

export const fetchSessionCart = () => {
  const cartInfo = localStorage.getItem("cartItems");

  if (cartInfo && cartInfo !== "undefined") {
    return JSON.parse(cartInfo);
  } else {
    localStorage.removeItem("cartItems"); // Clear only the specific item
    return [];
  }
};

// Session user mode
export const fetchSessionUserMode = () => {
  const adminMode = localStorage.getItem("adminMode");

  if (adminMode && adminMode !== "undefined") {
    return JSON.parse(adminMode);
  } else {
    localStorage.removeItem("adminMode"); // Clear only the specific item
    return false;
  }
};
