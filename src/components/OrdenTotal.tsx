import { useMemo } from "react";
import type { MenuItem, OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderContentsProps = {
  order: OrderItem[];
};
export default function OrdenTotal({order}: OrderContentsProps) {
    const subtotalAmount = useMemo(()=> order.reduce((total,item)=> total+(item.quantity*item.price),0),[order])
  return (
    <>
      <div className="space-y">
        <h2 className="font-black text-2xl">Totales y propinas</h2>
        <p>
          Subtotatl a pagar:{''}
          <span className="font-bold">${formatCurrency( subtotalAmount)}</span>
        </p>
        <p>
          Propina:{''}
          <span className="font-bold">$0</span>
        </p>
        <p>
          Total a Pagar:{''}
          <span className="font-bold">$0</span>
        </p>
      </div>

      <button>Vaciar</button>
    </>
  );
}
