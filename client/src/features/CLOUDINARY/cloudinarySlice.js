import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  apiKey: '282195851739394',
  cloudName: 'dsra1ldsf',
};

const cloudinarySlice = createSlice({
  name: 'cloudinary',
  initialState,
  reducers: {},
});

export default cloudinarySlice.reducer;
