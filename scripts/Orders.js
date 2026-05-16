// scripts/Orders.js
import { placeOrder } from "./TransientState.js"

export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders")
    const orders = await fetchResponse.json()

    // Map the array of objects to an array of HTML strings
    const ordersHTML = orders.map(
        (order) => {
            return `<section class="order">
                Order #${order.id} was placed!
            </section>`
        }
    )

    // Join the array of strings into a single string
    return ordersHTML.join("")
}