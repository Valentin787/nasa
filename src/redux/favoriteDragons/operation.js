import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteItem, getData, saveItem } from "utils/apiFirebase";

const API_FIREBASE_ENDPOINT = "favorite_dragons";

export const getDragons = createAsyncThunk('dragons/getDragonsStatus', async (_, { getState }) => {
  const { localId } = getState().auth;
  const data = await getData(`${localId}/${API_FIREBASE_ENDPOINT}`);
   console.log(data)
 
  return Object.keys(data || {}).map(idBase => {
   
    return { idBase, ...data[idBase] }
  })
});

export const addDragon = createAsyncThunk('dragon/addDragonStatus', async (newDragon, { getState }) => {
  const { localId } = getState().auth;
  const data = await saveItem(`${localId}/${API_FIREBASE_ENDPOINT}`, newDragon);
  // console.log(data)
  return {id:data.name, ...newDragon}
});

export const deleteDragon = createAsyncThunk('dragon/deleteDragonStatus', async (removeDragon, { getState }) => {
  const { localId } = getState().auth;
  await deleteItem(`${localId}/${API_FIREBASE_ENDPOINT}`, removeDragon.idBase);
  return removeDragon.idBase
}  
);
