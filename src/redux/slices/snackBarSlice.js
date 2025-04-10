import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  message: null,
  type: 'success',
};

export const snackBarSlice = createSlice({
  name: 'snackBar',
  initialState: initialState,
  reducers: {
    // actions creator
    openSnackBar: (state, action) => {
      {
        state.open = true;
        state.message = action.payload.message;
        state.type = action.payload.type;
      }
    },
    closeSnackBar: () => {
      return initialState; // reset lại state
    },
  },
});
// action creator => function ||| action {type, payload} => openSnackBar({message: 'Good job}) => action {type: 'snackBar/openSnackBar', payload: {message: 'Good job}
// Khi function creater openSnackBar() được thực thì => trả về object action
export const { openSnackBar, closeSnackBar } = snackBarSlice.actions;
export default snackBarSlice.reducer;
