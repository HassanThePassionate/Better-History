import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckboxState {
  isChecked: boolean;
}

const initialState: CheckboxState = {
  isChecked: true,
};

const checkboxSlice = createSlice({
  name: "checkbox",
  initialState,
  reducers: {
    toggleCheckbox: (state) => {
      state.isChecked = !state.isChecked;
    },
    setCheckbox: (state, action: PayloadAction<boolean>) => {
      state.isChecked = action.payload;
    },
  },
});

export const { toggleCheckbox, setCheckbox } = checkboxSlice.actions;
export default checkboxSlice.reducer;
