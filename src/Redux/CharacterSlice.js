import { createSlice } from "@reduxjs/toolkit";

export const CharacterSlice = createSlice({
    name: "Character",
    initialState: {
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationY: Math.PI,
        health: 60,
        chop: false
    },
    reducers: {
        // reducer to toggle the boolean states
        toggle: (state, action) => {
            state[action.payload[0]] = action.payload[1]
        }, 
        // change states with ["name of state", "new value"] syntax
        changeState: (state, action) => {
            state[action.payload[0]] = action.payload[1]
        },
        // change states with ["name of state", "new value"] syntax
        addToState: (state, action) => {
            state[action.payload[0]] += action.payload[1]
        }
}});

export const { toggle, changeState, addToState } = CharacterSlice.actions;
export default CharacterSlice.reducer;
