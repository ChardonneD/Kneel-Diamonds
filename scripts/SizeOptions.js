// scripts/SizeOptions.js

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let optionsHTML = ""

    for (const size of sizes) {
        optionsHTML += `<div>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </div>`
    }

    return optionsHTML
}