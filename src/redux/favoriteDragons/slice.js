import { createSlice } from '@reduxjs/toolkit';
import { getDragons, addDragon, deleteDragon } from './operation';


const initialState = {
  items: [],
  loading: false,
  error: null,

}

const favoriteDragonsSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
  },
  extraReducers:builder => {
    builder
      ///GET_DRAGONS
      .addCase(getDragons.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
      .addCase(getDragons.fulfilled, (state, { payload }) => {
        console.log(payload)
      state.items = payload;
      state.loading = false;
    })
    .addCase(getDragons.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    })
    ///// ADD_DRAGON
    .addCase(addDragon.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
      .addCase(addDragon.fulfilled, (state, { payload }) => {
      state.items.push(payload);
      state.loading = false;
    })
    .addCase(addDragon.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    })

  ///// REMOVE_DRAGON
    .addCase(deleteDragon.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
      .addCase(deleteDragon.fulfilled, (state, { payload }) => {
        console.log(payload)
       
        const index = state.items.findIndex(({id}) => {
          console.log(id)
          
          return id === payload
        });
      state.items.splice(index, 1);
      state.loading = false;
    })
    .addCase(deleteDragon.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
  }
});



export default favoriteDragonsSlice.reducer