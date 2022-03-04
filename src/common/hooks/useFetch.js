import {useEffect, useReducer} from 'react';

const ACTION_TYPES = {
  FETCH_START: 'FETCH_START',
  FETCH_ERROR: 'FETCH_ERROR',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_FINISH: 'FETCH_FINISH'
};

const dataFetchReducer = (state, action) => {
  if (!action) return state;

  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {...state, loading: true};
    case ACTION_TYPES.FETHC_ERROR:
      return {...state, loading: false, error: action.payload};
    case ACTION_TYPES.FETCH_SUCCESS:
      return {...state, loading: false, error: null, data: action.payload};
    case ACTION_TYPES.FETCH_FINISH:
      return {...state, loading: false};
    default:
      return state;
  }
};

const useFetch = (endpoint) => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    loading: false,
    error: null,
    data: []
  });

  useEffect(() => {
    if (!endpoint) return;

    dispatch({type: ACTION_TYPES.FETCH_START});
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        const responseData = await response.json();
        dispatch({type: ACTION_TYPES.FETCH_SUCCESS, payload: responseData});
      } catch (e) {
        dispatch({type: ACTION_TYPES.FETCH_ERROR, payload: e.message});
      } finally {
        dispatch({type: ACTION_TYPES.FETCH_FINISH});
      }
    };
    fetchData();
  }, [endpoint]);

  return state;
};

export default useFetch;
