import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice';
import cloudinaryReducer from '../features/CLOUDINARY/cloudinarySlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    cloudinary: cloudinaryReducer,
  },
});
