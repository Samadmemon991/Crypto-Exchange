import { configureStore } from "@reduxjs/toolkit";
import currentUserSlice from "./slices/currentUser"
import coinDataSlice from "./slices/globalCoins"

const store = configureStore({
    reducer: {
        userReducer: currentUserSlice,
        globalCoinDataReducer: coinDataSlice,
    }
});

export default store;
