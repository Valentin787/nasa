import { createAsyncThunk } from "@reduxjs/toolkit";
import { getItems } from "../../utils/api-fetch";

const id = "dragons/5e9d058759b1ff74a7ad5f8f";
const allDragonsId = "dragons";

const getById = createAsyncThunk("getById/getByIdStatus", () => getItems(id));

const getAllDragons = createAsyncThunk(
  "getAllDragons/getAllDragonsStatus",
  () => getItems(allDragonsId)
);

// const API_ENDPOINT = "cities";

// const getCities = createAsyncThunk('cities/getCitiesStatus', async (_,{ getState }) => {
//   const { localId } = getState().auth;
//   const data = await getData(`${localId}/${API_ENDPOINT}`);

//   return Object.keys(data || {}).map(id => {
//     // console.log(id)
//     return { id, ...data[id] }
//   })
// });

export { getById, getAllDragons };
