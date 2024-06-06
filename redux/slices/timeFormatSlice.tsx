// src/redux/slices/timeFormatSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TimeFormatState {
  format: "24-hour" | "12-hour";
  hours: string[];
}

const initialState: TimeFormatState = {
  format: "24-hour",
  hours: [
    ...[23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12].map((h) => h + ""),
    ...[11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((h) => h + ""),
    "00",
  ],
};

const timeFormatSlice = createSlice({
  name: "timeFormat",
  initialState,
  reducers: {
    setFormat: (state, action: PayloadAction<"24-hour" | "12-hour">) => {
      state.format = action.payload;
      if (action.payload === "24-hour") {
        state.hours = [
          ...[23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12].map(
            (h) => h + ""
          ),
          ...[11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((h) => h + ""),
          "00",
        ];
      } else {
        state.hours = [
          ...[11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 12].map((h) => h + ""),
          ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((h) => h + ""),
          "12",
        ];
      }
    },
  },
});

export const { setFormat } = timeFormatSlice.actions;
export default timeFormatSlice.reducer;
