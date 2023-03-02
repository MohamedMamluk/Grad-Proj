import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  id: null,
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.role = action.payload.role;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('id', action.payload.id);
      localStorage.setItem('role', action.payload.role);
    },
    logout: (state) => {
      state.token = null;
      state.id = null;
      state.role = null;
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.removeItem('role');
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
