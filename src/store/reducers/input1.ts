import { createAction, createReducer } from '@reduxjs/toolkit';

interface Exo1State {
  inputExo1: string
}

// == State
const initialState: Exo1State = {
  inputExo1: '',
};

export const setInputExo1 = createAction<string>('input1/SET_INPUT_EXO1');

const input1Reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setInputExo1, (state, action) => {
      state.inputExo1 = action.payload;
    });
});

export default input1Reducer;
