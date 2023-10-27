import { useEffect, useState } from 'react';
import './App.css'
import { createClient } from 'urql';

function App() {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading

  const QueryURL = "https://gateway.thegraph.com/api/6f9d8275fa98eef5c0b958d0a53842fc/subgraphs/id/ELUcwgpm14LKPLrBRuVvPvNKHQ9HvwmtKgKSH6123cr7";
  const client = createClient({
    url: QueryURL
  });

  const query =
    `
    {
      tokens(first: 5, where: {lastPriceUSD_gt: "100"}, orderBy: lastPriceUSD) {
        id
        name
        symbol
        decimals
        lastPriceUSD
      }
    }
  `;

  useEffect(() => {
    const getTokens = async () => {
      const { data } = await client.query(query).toPromise();
      setTokens(data.tokens);
      setLoading(false); // Set loading to false once data is fetched
    };
    getTokens();
  }, []);

  return (
    <>
      <div className="underline text-3xl font-semibold text-center py-10">The Graph</div>
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Tokens Information</h1>
        {loading ? (
          <div className="text-center">Loading...</div> // Display loader while fetching
        ) : (
          <div className="mt-4">
            {tokens !== null && tokens.length > 0 && (
              tokens.map((token) => (
                <div key={token.id} className="p-2 border rounded shadow-md mb-2">
                  <div className="font-semibold">ID: {token.id}</div>
                  <div className="font-semibold">Name: {token.name}</div>
                  <div className="font-semibold">Symbol: {token.symbol}</div>
                  <div className="font-semibold">Decimals: {token.decimals}</div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default App;
