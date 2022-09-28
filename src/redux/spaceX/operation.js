import { createAsyncThunk } from "@reduxjs/toolkit";
import { getItems } from "../../utils/api-fetch";

const id = "dragons/5e9d058759b1ff74a7ad5f8f";
const allDragonsId = "dragons";


export const getById = createAsyncThunk("getById/getByIdStatus", () => getItems(id));

export const getAllDragons = createAsyncThunk("getAllDragons/getAllDragonsStatus",() => getItems(allDragonsId));
