import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  roll: '',
  name: ''
};

export const Hostelslice = createSlice({
  name: 'hostel',
  initialState,
  reducers: {
    setroll: (state, action)=>{
      state.roll= action.payload;
    },
    setname: (state, action)=>{
      state.name= action.payload;
    },
  },
})
export const {setroll, setname} = Hostelslice.actions;

export default Hostelslice.reducer