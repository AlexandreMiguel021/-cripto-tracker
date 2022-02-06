import './App.css';
import Tbody from './components/Tbody';
import { useCoin } from './hook/useCoin';

function App() {
  const {filteredCoins,sorting, handleChange} = useCoin();

  return (
    <main className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Pesquisar uma moeda</h1>
        <form>
          <input
            className='coin-input'
            onChange={handleChange}
            type='text'
            placeholder='Pesquisar'
          />
        </form>
      </div>
      <div className='sorting-options'>
        <div className='btn' onClick={() => sorting('name')}>
          nome
          <i className='fas fa-sort'></i>
        </div>
        <div className='btn' onClick={() => sorting('current_price')}>
          preço
          <i className='fas fa-sort'></i>
        </div>
        <div
          className='btn'
          onClick={() => sorting('price_change_percentage_24h')}
        >
          24H
          <i className='fas fa-sort'></i>
        </div>
      </div>
      <table>
      <thead>
        <tr>
          <th scope='col'>Moeda</th>
          <th scope='col'>Preço</th>
          <th scope='col'>Volume</th>
          <th scope='col'>24H</th>
          <th scope='col'>market cap</th>
        </tr>
      </thead>

      {filteredCoins.map((coin) => {
        return (
          <Tbody
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </table>
    </main>
  );
}

export default App;
