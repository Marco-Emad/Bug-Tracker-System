import { createSlice } from '@reduxjs/toolkit'
import { retrieveBugs } from '../bugController'

const slice = createSlice({
    name: "bug",
    initialState: [],
    reducers: {
        getBugs: state => retrieveBugs(),

        createBugs: (state, actions) => {

        },
        updateBug: (state, actions) => {

        },
        markComplete: (state, action) => {

        }
    }
})

export default slice.reducer;
export const { signIn, signOut, createUser, markComplete, getBugs } = slice.actions;