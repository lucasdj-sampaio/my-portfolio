import { skillSlice } from './slices';
import { serviceSlice } from './slices';
import { combineReducers } from 'redux';

const reducers = combineReducers({ serviceSlice, skillSlice });

export default reducers;
