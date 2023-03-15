import { configureStore } from "@reduxjs/toolkit";
import Character from "./CharacterSlice"

export default configureStore({
    reducer: {
        Character: Character
    }
});
