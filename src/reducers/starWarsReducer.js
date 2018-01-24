import { FETCHING_CHARS, CHARS_RECEIVED, ERROR_FETCHING_CHARS } from '../actions';
const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null
  // define a few properties here.
  // Array chars, String fetching, String fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS:
      return {...state, fetching: true}; 
    case CHARS_RECEIVED: 
      return {
        ...state,
        fetched: true,
        fetching: false,
        chars: Object.keys(action.payload)
      };
    case ERROR_FETCHING_CHARS:
      return{...state, fetching: false, error: action.payload};
    default:
      return state;
  }
};
