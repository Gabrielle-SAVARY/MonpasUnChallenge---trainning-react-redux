import { createAction, createReducer } from '@reduxjs/toolkit';

interface AppState {
    inputExo1: string;
  }

// == State
const initialState: AppState = {
inputExo1: '',
};

const input1REducer = createReducer(, (builder) => {
  builder

/*     .addCase(changeDirection, (state, action) => {
      state.direction = action.payload;
    }) */

});
export default input1REducer;
