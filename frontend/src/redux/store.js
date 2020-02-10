import { createStore } from "redux";
import {flood, flooded, randomNum} from '../utils';

const COLORS = ['yellow', 'green', 'blue', 'violet', 'pink', 'red'];
const SIZE = 14;


const getField = () => {
  return new Array(SIZE)
    .fill(0)
    .map(_ => new Array(SIZE)
    .fill(0)
    .map(_ => COLORS[randomNum(COLORS.length)]))
}

const initialState = () => {
  return {
    field: getField(), 
    counter: 0,
    isDone: false
  }
}

const rootReducer = function(state = initialState(), action) {
  switch(action.type) {
    case "flood":
      if (state.field[0][0] === action.color) return state;
      state.field = [...flood(state.field, action.color)];
      state.isDone = flooded(state.field);
      state.counter++;
      return {...state}
    case "reset":
        state = initialState();
        return {...state}
    default:
      return state
  }
}

export default createStore(rootReducer);
