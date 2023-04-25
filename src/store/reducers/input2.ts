import { createAction, createReducer } from '@reduxjs/toolkit';

interface Exo2State {
  inputExo2: string
  submit2: string
}

// == State
const initialState: Exo2State = {
  inputExo2: '',
  submit2: '',
};

export const setInputExo2 = createAction<string>('input2/SET_INPUT_EXO1');
export const setSubmit2 = createAction<string>('input2/SUBMIT_INPUT_EXO1');

const input2Reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setInputExo2, (state, action) => {
      state.inputExo2 = action.payload;
    })
    .addCase(setSubmit2, (state, action) => {
      state.submit2 = action.payload;
    });
});

export default input2Reducer;
