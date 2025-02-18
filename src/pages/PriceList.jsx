import { useState } from 'react';

function PriceList() {
  const [selectedLocation, setSelectedLocation] = useState('kathmandu');
  const [selectedProduct, setSelectedProduct] = useState('retail');

  const retailPrices = [
    { date: '2025.01.15', time: '24:00 hrs', petrol: '165.00', diesel: '156.00', kerosene: '156.00', lpg: '1910.00', atfDp: '126.00', atfDf: '960.00' },
    { date: '2024.12.31', time: '24:00 hrs', petrol: '163.00', diesel: '153.00', kerosene: '153.00', lpg: '1910.00', atfDp: '126.00', atfDf: '960.00' },
    { date: '2024.12.15', time: '24:00 hrs', petrol: '162.00', diesel: '151.00', kerosene: '151.00', lpg: '1910.00', atfDp: '128.00', atfDf: '975.00' },
    { date: '2024.11.30', time: '24:00 hrs', petrol: '160.00', diesel: '153.00', kerosene: '153.00', lpg: '1910.00', atfDp: '128.00', atfDf: '975.00' },
    { date: '2024.02.15', time: '24:00 hrs', petrol: '172.00', diesel: '160.00', kerosene: '160.00', lpg: '1910.00', atfDp: '136.00', atfDf: '1035.00' }
  ];

  const locationPrices = {
    kathmandu: {
      petrol: [
        { date: '2025.02.15', price: '168.00' },
        { date: '2025.01.31', price: '167.00' },
        { date: '2025.01.16', price: '165.00' },
        { date: '2025.01.01', price: '163.00' },
        { date: '2024.12.16', price: '162.00' }
      ],
      diesel: [
        { date: '2025.02.15', price: '156.00' },
        { date: '2025.01.31', price: '160.00' },
        { date: '2025.01.16', price: '156.00' },
        { date: '2025.01.01', price: '153.00' },
        { date: '2024.12.16', price: '151.00' }
      ]
    }
  };

  const renderPriceTable = () => {
    if (selectedProduct === 'retail') {
      return (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Petrol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Diesel</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kerosene</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LPG</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ATF (DP)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ATF (DF)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {retailPrices.map((price, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{price.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{price.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{price.petrol}</td>
                <td className="px-6 py-4 whitespace-nowrap">{price.diesel}</td>
                <td className="px-6 py-4 whitespace-nowrap">{price.kerosene}</td>
                <td className="px-6 py-4 whitespace-nowrap">{price.lpg}</td>
                <td className="px-6 py-4 whitespace-nowrap">{price.atfDp}</td>
                <td className="px-6 py-4 whitespace-nowrap">{price.atfDf}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      const prices = locationPrices[selectedLocation]?.[selectedProduct] || [];
      return (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {prices.map((price, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{price.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{price.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Current Fuel Prices</h1>
        
        <div className="mb-8 flex space-x-4">
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="block rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          >
            <option value="retail">Retail Prices</option>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
          </select>

          {selectedProduct !== 'retail' && (
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="block rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            >
              <option value="kathmandu">Kathmandu</option>
              <option value="pokhara">Pokhara</option>
              <option value="birgunj">Birgunj</option>
              <option value="biratnagar">Biratnagar</option>
            </select>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          {renderPriceTable()}
        </div>
        
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Price Update Information</h2>
          <p className="text-gray-700">
            Prices are updated every 15 days based on the automatic price system and international market rates.
            All prices include applicable taxes and duties.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PriceList;