import { BiLock } from "react-icons/bi";
import CardForm from "./forms/Card";
import CheckoutFooter from "./footer";
import MomoForm from "./forms/Momo";
import Selector from "./Selector";
import { motion } from "framer-motion";
import { useStateValue } from "../../context/StateProvider";
import { emptyCart } from "../../utils/functions";
import { useState } from "react";
import { ImSpinner3 } from "react-icons/im";
import { toast } from "react-toastify";
import { firebaseAddOrder } from "../../Firebase";
import { time } from "console";

const Body = ({ action }: { action: any }) => {
  const [
    { checkoutData, cartTotal, paymentMethod, cartItems, foodItems, user },
    dispatch,
  ] = useStateValue();
  const [loading, setLoading] = useState(false);

  const completePayment = async () => {
    if (!checkoutData) {
      return toast.error("Complete payment info");
    }

    setLoading(true);

    const data = {
      cartItems,
      user,
      time: new Date().toLocaleString(),
    };

    console.log(data);

    try {
      // Add the order to Firebase
      await firebaseAddOrder(data);

      // Empty the cart after order is added
      await emptyCart(cartItems, foodItems, dispatch);

      // Close the action (assuming this hides a modal or similar UI element)
      action(false);

      // Show success toast after a delay

      setLoading(false);
      toast.success("Order completed successfully with payment.", {
        position: "top-center",
        autoClose: 6000,
      });
    } catch (error) {
      console.error("Error completing payment:", error);
      toast.error("There was an error processing your order.");
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-full rounded-t-[2rem]  bg-cartBg flex flex-col">
      {/* Payment Selectors */}
      <Selector />
      {/* payment form  */}
      <div className="min-h-[50vh] mt-5">
        {paymentMethod === "mobile_money" ? <MomoForm /> : <CardForm />}
        <div className="flex items-center justify-center w-full my-2">
          <p className="text-gray-300">
            Amount Due:{" "}
            <span className="font-bold text-white">{`₹{cartTotal}`}</span>{" "}
          </p>
        </div>
        {/* pay now button */}

        <div className="flex items-center justify-center w-full mt-4">
          <motion.button
            onClick={completePayment}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 w-[90%] p-2 rounded-full bg-gradient-to-tr from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-400 transition-all duration-75 ease-in-out text-gray-50 text-lg my-2 hover:shadow-lg"
          >
            {!loading && <BiLock className="" />}
            {!loading ? (
              "PAY NOW"
            ) : (
              <ImSpinner3 className="animate animate-spin" />
            )}
          </motion.button>
        </div>
      </div>
      <CheckoutFooter />
    </div>
  );
};

export default Body;
