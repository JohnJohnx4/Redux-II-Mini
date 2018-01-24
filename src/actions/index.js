import axios from 'axios'
export const FETCHING_CHARS = 'FETCHING_CHARS';
export const CHARS_RECEIVED = 'CHARS_RECEIVED';
export const ERROR_FETCHING_CHARS = 'ERROR_FETCHING_CHARS';

export const getChars = () => {
    var swURL = 'https://swapi.co/api/people/'
    const chars = axios.get(swURL);
    return dispatch => {
      dispatch({ type: FETCHING_CHARS });
      chars
        .then(({ data }) => {
            console.log("ARRAY RECIEVED: ",data.results);
          dispatch({ type: CHARS_RECEIVED, payload: data.results });
        })
        .catch(err => {
          dispatch({ type: ERROR_FETCHING_CHARS, payload: err });
        });
    };
}
