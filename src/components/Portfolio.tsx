import React, { useState } from 'react';

type Asset = {
  id: number;
  name: string;
  value: number;
};

const initialAssets: Asset[] = [
  { id: 1, name: 'Bitcoin', value: 50000 },
  { id: 2, name: 'Ethereum', value: 2000 },
  { id: 3, name: 'Tesla', value: 800 },
];

const Portfolio: React.FC = () => {
  const [assets, setAssets] = useState(initialAssets);

  const totalValue = assets.reduce((total, asset) => total + asset.value, 0);

  return (
    <div>
      <h1>My Portfolio</h1>
      <ul>
        {assets.map(asset => (
          <li key={asset.id}>
            {asset.name}: ${asset.value.toLocaleString()}
          </li>
        ))}
      </ul>
      <p>Total value: ${totalValue.toLocaleString()}</p>
    </div>
  );
};

export default Portfolio;
