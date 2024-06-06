// store.ts
import { configureStore, createSlice } from "@reduxjs/toolkit";
import checkboxReducer from "../slices/checkboxSlice";
import ScrollReducer from "../slices/ScrollSlice";
import timeFormatReducer from "../slices/timeFormatSlice";
interface FontSizeState {
  value: "small" | "medium" | "large";
}

const initialState: FontSizeState = {
  value: "small",
};

const fontSizeSlice = createSlice({
  name: "fontSize",
  initialState,
  reducers: {
    setSmall: (state) => {
      state.value = "small";
    },
    setMedium: (state) => {
      state.value = "medium";
    },
    setLarge: (state) => {
      state.value = "large";
    },
  },
});

export const { setSmall, setMedium, setLarge } = fontSizeSlice.actions;

const store = configureStore({
  reducer: {
    fontSize: fontSizeSlice.reducer,
    checkbox: checkboxReducer,
    Scroll: ScrollReducer,
    timeFormat: timeFormatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
