c // demoReducer.js

// Import necessary dependencies
import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
    assignedUser: null,
    // other state properties...
};

// Define slice
const demoSlice = createSlice({
    name: 'demo',
    initialState,
    reducers: {
        // Define reducers
    },
});

// Define selector
export const getAssignedUser = (state) => state.demo.assignedUser;

// Export reducer and action creators
export const { reducer, actions } = demoSlice;