function About() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Nepal Oil Corporation</h1>
          <p className="text-xl text-gray-600">Serving the nation since 1970</p>
        </div>

        <div className="prose max-w-none">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-gray-700 mb-4">
              Nepal Oil Corporation Limited (NOC) was established in 2027 Poush 26 B.S. (1943 AD). It is fully government owned corporation. The Corporation is responsible for importing, transporting, storing and selling petroleum products in Nepal.
            </p>
            <p className="text-gray-700 mb-4">
              The head office of the Corporation is currently located at Teku, Kathmandu. A new central office building is being constructed on the land located in Babarmahal where the previous central office was located.
            </p>
            <p className="text-gray-700">
              The corporation has seven provincial offices and under these provincial offices there are fuel depots, aviation fuel depots, refueling stations and branch offices. The corporation currently has a storage capacity of 60,384 kilo liters of petroleum products. About 600 employees are working here.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Import and Distribution</h2>
            <p className="text-gray-700 mb-4">
              There is no production of any kind of petroleum products in Nepal. Currently, all types of petroleum products are imported from India. Petroleum products are imported from various locations including Barauni, Motihari, Siliguri, Betalpur, Gonda, Banthra and Lucknow, while LP Gas is imported from Barauni, Durgapur, Haldia, Mathura and Paradip.
            </p>
            <p className="text-gray-700">
              The Motihari-Amlekhganj pipeline (131 km) has been constructed for diesel import, reducing transportation costs and ensuring quality. Future plans include pipeline extensions to Chitwan and Charali.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Distribution Network</h2>
            <p className="text-gray-700 mb-4">
              Petroleum products are delivered to consumers through more than 1563 private dealers. LP Gas is supplied through private sector gas producers using product delivery orders (PDO) from Indian depots.
            </p>
            <p className="text-gray-700">
              The demand for petroleum products has been increasing by 12-15 percent annually. Pricing is determined every 15 days according to the automatic price system based on Indian prices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;