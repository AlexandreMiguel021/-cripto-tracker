import axios from 'axios';

export const fetchData = async (setData) => {
  axios
    .get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    )
    .then((res) => setData(res.data));
};