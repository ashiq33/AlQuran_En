import axios from 'axios';
import { setSurahs, setLoading, setError } from '../redux/quranSlice';

export const fetchSurahs = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get('http://api.alquran.cloud/v1/quran/en.asad');
    dispatch(setSurahs(response.data.data.surahs));  // Store surahs list
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};
