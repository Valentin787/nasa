import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { getById, getAllDragons } from "./operation";

const itemReducer = createReducer([], (builder) => {
  builder.addCase(getById.fulfilled, (_, { payload }) => payload);
});

const allDragonsReducer = createReducer([], (builder) => {
  builder.addCase(getAllDragons.fulfilled, (_, { payload }) => payload);
});

const loadingReducer = createReducer(false, (builder) => {
  ///GET_ITEM
  builder.addCase(getById.pending, () => true);
  builder.addCase(getById.fulfilled, () => false);
  builder.addCase(getById.rejected, () => false);
  ///GET_All_DRAGONS
  builder.addCase(getAllDragons.pending, () => true);
  builder.addCase(getAllDragons.fulfilled, () => false);
  builder.addCase(getAllDragons.rejected, () => false);
});

const errorReducer = createReducer(null, (builder) => {
  ///GET_ITEM
  builder.addCase(getById.pending, () => null);
  builder.addCase(getById.rejected, (_, { payload }) => payload);
  ///GET_All_DRAGONS
  builder.addCase(getAllDragons.pending, () => null);
  builder.addCase(getAllDragons.rejected, (_, { payload }) => payload);
});

const dataReducers = combineReducers({
  item: itemReducer,
  allDragons: allDragonsReducer,
  loading: loadingReducer,
  error: errorReducer,
});
const itemsReducers = combineReducers({
  data: dataReducers,
});

export default itemsReducers;
