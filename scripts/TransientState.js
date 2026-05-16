// scripts/TransientState.js

// Set up the transient state data structure and provide initial values
const transientState = {
    metalId: 0,
    sizeId: 0,
    styleId: 0
}

// Functions to modify each property of transient state
export const setMetalId = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log("Transient State updated:", transientState)
}

export const setSizeId = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log("Transient State updated:", transientState)
}

export const setStyleId = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log("Transient State updated:", transientState)
}