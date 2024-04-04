import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[]
}

export const OrderTotals = ({order} : OrderTotalsProps) => {

    const subtotal= useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl"></h2>
            <p>Subtotal a pagar: {''}
                <span className="font-bold">{formatCurrency(subtotal)}</span>
            </p>

            <p>Propina: {''}
                <span className="font-bold">$0</span>
            </p>

            <p>Total a Pagar: {''}
                <span className="font-bold">$0</span>
            </p>
        </div>

         <button></button>
    </>
  )
}