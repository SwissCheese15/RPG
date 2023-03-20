import { createSlice } from "@reduxjs/toolkit";
import * as THREE from "three"

export const CharacterSlice = createSlice({
    name: "Character",
    initialState: {
        position: [0, 0, 0],
        rotationY: Math.PI,
        health: 60,
        chop: false,
        money: 100
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
        },
        addVector: (state, action) => {
            state.position[0] += action.payload[0]
            state.position[1] += action.payload[1]
            state.position[2] += action.payload[2]
        }
}});

export const { toggle, changeState, addToState, addVector } = CharacterSlice.actions;
export default CharacterSlice.reducer;
