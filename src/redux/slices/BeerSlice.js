import {createSlice} from '@reduxjs/toolkit';

const BeerSlice = createSlice({
  name: 'beers',
  initialState: {
    beerSelected: {},
  },

  reducers: {
    setBeerSelected: (state, action) => {
      state.beerSelected = action.payload;
    },
  },
});

export const {setBeerSelected} = BeerSlice.actions;

export default BeerSlice.reducer;
