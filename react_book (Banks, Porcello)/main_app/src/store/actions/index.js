export const actions = {
    ADD_COLOR: "ADD_COLOR"
}


export const addColor = (color) => ({
    type: actions.ADD_COLOR,
    color,
    timestamp: Date.now()
})