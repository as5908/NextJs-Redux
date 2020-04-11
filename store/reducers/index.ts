import { combineReducers } from 'redux';
import { Counter, counterReducer } from './counter';

export interface RootState {
  counter: Counter;
}

export const reducers = combineReducers({
  counter: counterReducer,
});
