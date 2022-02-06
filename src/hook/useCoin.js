import { useState, useEffect } from 'react';
import { fetchData } from '../api/api';

export const useCoin = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('ASC');

  const sorting = (col) => {
    if (order === 'ASC') {
      const sorted = coins.sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setCoins(sorted);
      setOrder('DSC');
    }
    if (order === 'DSC') {
      const sorted = coins.sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setCoins(sorted);
      setOrder('ASC');
    }
  };

  useEffect(() => {
    fetchData(setCoins);
  }, [setCoins]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return {
    handleChange,
    filteredCoins,
    sorting,
  };
};
