import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DisplayState } from '../interfaces';

const initialState: DisplayState = {
  isAudioDisplayed: true,
  isWeatherDisplayed: true,
  isTimeDisplayed: true,
  isDateDisplayed: true,
  isGreetingDisplayed: true,
  isQuotesDisplayed: true,
  isTodoDisplayed: true,
};

const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    toggleDisplay: (state: DisplayState, action: PayloadAction<string>) => {
      const key: string = action.payload;

      state[key] = !state[key];
    }
  },
});

export const { toggleDisplay } = displaySlice.actions;

export default displaySlice.reducer;
