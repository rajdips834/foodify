import React, { useEffect } from "react";
import { firebaseFetchFoodDetails } from "../../../Firebase";
import { useState } from "react";
import { get } from "http";
interface CartItem {
  fid: number;
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface OrderCardProps {
  cartItems: CartItem[];
  time: string;
  user: {
    email: string;
  };
}

const OrderCard: React.FC<OrderCardProps> = ({ cartItems, time, user }) => {
  let id = 0;
  const [details, setDetails] = React.useState<any>();
  useEffect(() => {
    firebaseFetchFoodDetails().then((data) => {
      setDetails(data);
    });
  }, []);

  return (
    <div className="max-w-sm p-4 overflow-hidden bg-white rounded shadow-lg">
      <div className="mb-2 text-xl font-bold">Order Summary</div>
      <p className="text-base text-gray-700">
        <strong>User:</strong> {user.email}
      </p>
      <p className="text-base text-gray-700">
        <strong>Time:</strong> {time}
      </p>
      <div className="mt-4">
        <strong>Items:</strong>
        {details && (
          <ul>
            {cartItems.map((item) => {
              const food = details.find((food: any) => food.id === item.fid);
              console.log(food);

              return (
                <li key={item.id} className="flex justify-between">
                  <span>{food?.title}</span>
                  {/* <span>{food?.qty}</span> */}
                  <span>{food?.price}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
