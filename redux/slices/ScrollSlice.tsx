import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckboxState {
  isScroll: boolean;
}

const initialState: CheckboxState = {
  isScroll: true,
};

const ScrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    toggleScroll: (state) => {
      state.isScroll = !state.isScroll;
    },
    setScroll: (state, action: PayloadAction<boolean>) => {
      state.isScroll = action.payload;
    },
  },
});

export const { toggleScroll, setScroll } = ScrollSlice.actions;
export default ScrollSlice.reducer;
