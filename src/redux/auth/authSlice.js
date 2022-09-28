import { createSlice } from '@reduxjs/toolkit';
// import { MdQueryBuilder } from 'react-icons/md';
import { register, singIn, getUser, refreshToken } from './authOperations';



const initialState = {
  user: { name: null, email: null },
  
  token: null,
  refreshToken: null,
  localId: null,
  disabled:false,
  
  loading: false,
  loadingUser: false,
  
  error: null,
  
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: () => initialState,
  },
  extraReducers: builder => {
     builder
       .addCase(register.pending, (state) => { 
         state.loading = true;
         state.error = null;
       })
       .addCase(register.fulfilled, (state, { payload }) => {
         state.user.name = payload.displayName;
         state.user.email = payload.email;
         state.loading = false;
         
         state.token = payload.idToken;
         state.refreshToken = payload.refreshToken;
         state.localId = payload.localId
        })
       .addCase(register.rejected, (state, { payload }) => {
         state.loading = false;
         state.error = payload;

       })

       //GET_USER
        .addCase(getUser.pending, (state) => { 
         state.loadingUser = true;
         state.error = null;
       })
       .addCase(getUser.fulfilled, (state, { payload }) => {
          state.user.name = payload.displayName;
          state.user.email = payload.email;
          state.localId = payload.localId

          state.loadingUser = false;
         
        })
       .addCase(getUser.rejected, (state, { payload }) => {
         state.loadingUser = false;
         state.error = payload;
         state.token = null;

       })
    //SING___IN
        .addCase(singIn.pending, (state) => { 
         state.loading = true;
         state.error = null;
       })
       .addCase(singIn.fulfilled, (state, { payload }) => {
         state.user.name = payload.displayName;
         state.user.email = payload.email;
         state.loading = false;
         
         state.token = payload.idToken;
         state.refreshToken = payload.refreshToken;
         state.localId = payload.localId
        })
       .addCase(singIn.rejected, (state, { payload }) => {
         state.loading = false;
         state.error = payload;

       })
    
    
  }
})
// console.log(authSlice.actions.singOut)
export const  {signOut}  = authSlice.actions;

export default authSlice.reducer