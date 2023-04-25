import { createAction, createReducer } from '@reduxjs/toolkit';

interface Exo3State {
  isNight: boolean
}

// == State
const initialState: Exo3State = {
  isNight: false,
};

export const setIsNight = createAction<boolean>('input3/SET_IS_NIGHT');

const input3Reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setIsNight, (state, action) => {
      state.isNight = action.payload;
    });
});

export default input3Reducer;
