import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  id: null,
  role: null,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.role = action.payload.role;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
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

export const { setUser, logout, setUserData } = authSlice.actions;
export const getAuth = (store) => store.auth;
export default authSlice.reducer;
