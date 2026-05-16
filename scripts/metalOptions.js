// scripts/MetalOptions.js
import { setMetalId } from "./TransientState.js"

const handleMetalChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "metal") {
        setMetalId(parseInt(event.target.value))
    }
}

document.addEventListener("change", handleMetalChoice)

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let optionsHTML = "<h2>Metals</h2>"

    // Use a for..of loop to generate the radio buttons
    const divStringArray = metals.map(
        (metal) => {
          return `<div>
              <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
          </div>`
        }
    )
optionsHTML += divStringArray.join("")

    return optionsHTML
}