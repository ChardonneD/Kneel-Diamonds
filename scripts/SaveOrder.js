// scripts/SaveOrder.js
import { placeOrder } from "./TransientState.js"

// 1. The Event Listener
const handleSaveOrderClick = (event) => {
    if (event.target.id === "saveOrder") {
        placeOrder()
    }
}

document.addEventListener("click", handleSaveOrderClick)

// 2. The Component Function
export const SaveOrderButton = () => {
    return "<button id='saveOrder'>Create Custom Order</button>"
}