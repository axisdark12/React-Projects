import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);

    if (itemExist) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 };

      setOrder([...order, newItem]);
    }

    console.log(order);
  };

  const removeItem = (id: MenuItem["id"]) => {
    setOrder(order.filter((item) => item.id !== id));
  };
  const placeOrder = () =>
  {
    setOrder([])
    setTip(0)
  }
  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
    
  };
}
/*
user:test_user1@testuser.com
password:temp6642

user: test_user@testuser.com
password: temp1854
*/

/**
 * 
level_id: 213
level_name: "Gabriel Casale"
program_id: 22
program_name: "Plan Premium"
subscription_active: 1
subscription_alert: 0
subscription_expiration: "2025-10-17"

Object

level_id: 4

level_name: "PRO"

program_id: 1

program_name: "Atleta de Cross fit"

subscription_active: 1

subscription_alert: 1

subscription_expiration: "2025-09-27"
 * 
 */
