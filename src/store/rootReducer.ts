import { aboutSlice } from './slices';
import { sectionSlice } from './slices';
import { skillSlice } from './slices';
import { serviceSlice } from './slices';
import { combineReducers } from 'redux';
import { pageTextSlice } from './slices';

const reducers = combineReducers({
  serviceSlice,
  skillSlice,
  sectionSlice,
  pageTextSlice,
  aboutSlice,
});

export default reducers;
