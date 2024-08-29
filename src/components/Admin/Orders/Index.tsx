import React, { useEffect } from "react";
import { firebaseFetchAllOrders } from "../../../Firebase";
import OrderCard from "./OrderCard";
export default function Orders() {
  const [orders, setOrders] = React.useState<any>();
  useEffect(() => {
    firebaseFetchAllOrders().then((data) => {
      setOrders(data);
    });
  });
  return (
    <div>
      {orders?.map((data: any, item: number) => {
        return (
          <OrderCard
            key={item}
            cartItems={data.cartItems}
            time={data.time}
            user={data.user}
          />
        );
      })}
    </div>
  );
}
