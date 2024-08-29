import React from "react";

interface CartItem {
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
        <ul className="mt-2 list-disc list-inside">
          {cartItems.map((item) => (
            <li key={item.id} className="text-gray-700">
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderCard;
