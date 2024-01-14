import React, { useEffect, useState } from 'react';

const Market = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?' +
            new URLSearchParams({
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 10,
              page: 1,
              sparkline: false,
              price_change_percentage: '1h,24h,7d', // Include the time intervals
            }),
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
    
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
    
        const data = await response.json();
        // console.log('API Response:', data); // Log the response to the console
    
        setCryptoData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    // Don't forget to call the fetchCryptoData function
    fetchCryptoData();
  }, []);  // Make sure to include an empty dependency array to run the effect only once

  return (
    <div data-aos="fade-up">
    <section className="section market" aria-label="crypto market live price">
      <div className="container">
        <h2 className="h2 section-title text-center">Track Cryptocurrency Prices in Real Time</h2>
        <p className="section-text text-center">
          Stay updated with live prices and performance metrics of the top cryptocurrencies. Our tracker provides real-time data, ensuring you have the latest information on your favorite digital assets.
        </p>

        <div className="table-container">
          <table className="market-table">
            <thead className="table-head">
              <tr className="table-row">
                <th className="table-heading">Cryptocurrency</th>
                <th className="table-heading">USD Price</th>
                <th className="table-heading">1h % Change</th>
                <th className="table-heading">24h % Change</th>
                <th className="table-heading">7d % Change</th>
              </tr>
            </thead>

            <tbody className="table-body">
              {cryptoData.map((crypto, index) => (
                <tr key={index} className="table-row">
                  <td className="table-data wrapper">
                    <img src={crypto.image} width="64" height="64" loading="lazy" alt={crypto.name} />
                    <div>
                      <h3 className="h3 coin-name">{crypto.name}</h3>
                      <span className="span">{crypto.symbol.toUpperCase()}</span>
                    </div>
                  </td>
                  <td className="table-data">
                    <data className="data" value={crypto.current_price}>{crypto.current_price}</data>
                  </td>
                  <td className="table-data">
                    <div className={`wrapper-flex ${crypto.price_change_percentage_1h_in_currency < 0 ? 'red' : 'green'}`}>
                      <div className="icon">
                        <ion-icon name={crypto.price_change_percentage_1h_in_currency < 0 ? 'caret-down' : 'caret-up'} aria-hidden="true"></ion-icon>
                      </div>
                      <data className="data" value={crypto.price_change_percentage_1h_in_currency}>{crypto.price_change_percentage_1h_in_currency.toFixed(2)}%</data>
                    </div>
                  </td>
                  <td className="table-data">
                    <div className={`wrapper-flex ${crypto.price_change_percentage_24h_in_currency < 0 ? 'red' : 'green'}`}>
                      <div className="icon">
                        <ion-icon name={crypto.price_change_percentage_24h_in_currency < 0 ? 'caret-down' : 'caret-up'} aria-hidden="true"></ion-icon>
                      </div>
                      <data className="data" value={crypto.price_change_percentage_24h_in_currency}>{crypto.price_change_percentage_24h_in_currency.toFixed(2)}%</data>
                    </div>
                  </td>
                  <td className="table-data">
                    <div className={`wrapper-flex ${crypto.price_change_percentage_7d_in_currency < 0 ? 'red' : 'green'}`}>
                      <div className="icon">
                        <ion-icon name={crypto.price_change_percentage_7d_in_currency < 0 ? 'caret-down' : 'caret-up'} aria-hidden="true"></ion-icon>
                      </div>
                      <data className="data" value={crypto.price_change_percentage_7d_in_currency}>{crypto.price_change_percentage_7d_in_currency.toFixed(2)}%</data>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
);
 
}

export default Market;
