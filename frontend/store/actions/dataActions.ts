// frontend/store/actions/dataActions.ts

import axios from 'axios';

export const fetchData = (symbol: string) => async (dispatch: any) => {
  try {
    const res = await axios.get(`/api/data?symbol=${symbol}`);
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
  }
};
