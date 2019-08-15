import {
  FETCH_GENRES_START,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_FAILURE
} from "../actions";

export const initialState = {
  genres: [],
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        genres: action.payload,
        error: ""
      };
    case FETCH_GENRES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
