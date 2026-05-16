// scripts/MetalOptions.js

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let optionsHTML = ""

    // Use a for..of loop to generate the radio buttons
    for (const metal of metals) {
        optionsHTML += `<div>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </div>`
    }

    return optionsHTML
}