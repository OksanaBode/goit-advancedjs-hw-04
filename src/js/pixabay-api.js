import axios from 'axios';
const PIXABAY_API_KEY = '50718626-0f15284cd54e6013b04c57504';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (searchedQuery, currentPage, perPage) => {
  const axiosOptions = {
    params: {
      key: PIXABAY_API_KEY,
      q: searchedQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: currentPage,
      per_page: perPage,
    },
  };

  try {
    const response = await axios.get('', axiosOptions);
    return response;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};