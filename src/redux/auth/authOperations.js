import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


// const BASE_URL = 'https://nasa-599d3-default-rtdb.europe-west1.firebasedatabase.app/';
const BASE_URL  = "https://identitytoolkit.googleapis.com/v1/accounts:"
const FIREBASE_API_KEY = "AIzaSyDfMj8Z2wH35nkJzQDFKXRLM8UShkfb8aQ";

const REFRESH_BASE_URL = "https://securetoken.googleapis.com/v1";

// "token?key=[API_KEY]"
const SING_IN_URL = 'signInWithPassword?key=';
//  



// axios.defaults.baseURL = BASE_URL;

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = ''
//   }
// };





const register = createAsyncThunk('auth/singUp', async (credentials,{rejectWithValue}) => {
  // console.log(credentials);
 
  const body = { ...credentials, returnSecureToken: true };
 
  // console.log(`body->>.`,body)
  try {
    const { data } = await axios.post(`${BASE_URL}signUp?key=${FIREBASE_API_KEY}`, body)
   
  // console.log(data)
    return data;
  } catch (error) {
    // console.log(error)
    // console.log(`final`,error.response.data.error.message)
    return rejectWithValue(error.response.data.error.message);
  }
 });

const singIn = createAsyncThunk('auth/singIn', async (credentials, {rejectWithValue}) => {
  // console.log(credentials)
  const body = { ...credentials, returnSecureToken: true };
  
   
  try {
    const { data } = await axios.post(`${BASE_URL}signInWithPassword?key=${FIREBASE_API_KEY}`, body);
    
    

    //  console.log(`SING_IN RESULT ->>`, data)
    return data;

  } catch (error) {
       return rejectWithValue(error.response.data.error.message);
  }
  // const token = thunkApi.getState();
  // console.log(token)
 });

// const singOut = createAsyncThunk('auth/singOut', async () => { });

const getUser = createAsyncThunk('auth/getUser', async (token, { getState, rejectWithValue,dispatch }) => {
  
  const persistToken = token ?? getState().auth.token;
  
  if (!persistToken) {
    return rejectWithValue()
  };


  try {
    const body = { idToken: persistToken };
    const { data } = await axios.post(`${BASE_URL}lookup?key=${FIREBASE_API_KEY}`, body)
    // console.log(`data ->>>`, data.users[0])
    
    return data.users[0]

  } catch (error) {

    const errMes = "INVALID_ID_TOKEN";
    if (errMes === error.response.data.error.message) {
      dispatch(refreshToken())
    }
    toast.error(errMes)
    return rejectWithValue(error.response.data.error.message)
  }
 });

const refreshToken = createAsyncThunk('auth/refreshToken', async (_, { getState,rejectWithValue,dispatch }) => { 
  console.log(getState().auth)
    const persistRefreshToken = getState().auth.refreshToken;
    if (!persistRefreshToken) {
    return rejectWithValue()
  };
  try {

    const body = { grant_type: "refresh_token", refresh_token: persistRefreshToken }
    // const body = getState().auth;
    // console.log(body)
    const { data } = await axios.post(`${REFRESH_BASE_URL}/token?key=${FIREBASE_API_KEY}`, body)
    console.log(data)
    dispatch(getUser(data.id_token))
    return data
  } catch (error) {
    return rejectWithValue(error.response.data.error.message)
  }
});


export { register, singIn, getUser, refreshToken };