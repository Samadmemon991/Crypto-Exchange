import { createSlice } from "@reduxjs/toolkit";
import { actionTypes } from "../actions/actionsTypes";


const initialState = {
    "Abdul Samad": {
        "BTC": 0.5,
        "LTC": 2.3,
        "ETH": 5.1
    },
    User2: {
        "BTC": 1.2,
        "LTC": 0.8,
        "ETH": 3.7
    },
    "User3": {
        "BTC": 0.7,
        "LTC": 1.5,
        "ETH": 2.9
    }
}

const userCoinsSlice = createSlice({
    name: actionTypes.USER_COINS, // The name of the slice
    initialState,
    reducers: {
        updateUserCoins: (state, action) => {
            const { user, currency, value } = action.payload;
            state[user][currency] = value;
        },
    },
});

export const { updateUserCoins } = userCoinsSlice.actions;
export default userCoinsSlice.reducer;
