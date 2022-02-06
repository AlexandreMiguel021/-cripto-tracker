import React from 'react';
import './Tbody.css';
import { formatter } from '../util/formatter';

const Tbody = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <tbody>
      <tr>
        <td data-label='Moeda'>
          <img src={image} alt={`cripto ${name}`} />
          <h2>{name}</h2>
          <span>{symbol}</span>
        </td>
        <td data-label='Preço'>
          <span>{formatter.format(price)}</span>
        </td>
        <td data-label='Volume'>
          <span>{formatter.format(volume)}</span>
        </td>
        <td data-label='24H'>
          {priceChange < 0 ? (
            <span className='coin-percent red'>{priceChange.toFixed(2)}%</span>
          ) : (
            <span className='coin-percent green'>
              {priceChange.toFixed(2)}%
            </span>
          )}
        </td>
        <td data-label='market cap'>
          <span>{formatter.format(marketcap)}</span>
        </td>
      </tr>
    </tbody>
  );
};

export default Tbody;
