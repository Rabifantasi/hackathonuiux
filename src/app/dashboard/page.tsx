import React from 'react';
import "../globals.css";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <aside className="w-full lg:w-64 bg-white p-4 sm:p-6">
        <div className="text-gray-500 mb-8">
          <h2 className="text-sm font-semibold">MAIN MENU</h2>
          <ul className="mt-4">
            {["Dashboard", "Car Rent", "Insight", "Reimburse", "Inbox", "Calendar"].map((item, index) => (
              <li className="mb-4" key={index}>
                <a href="#" className={`flex items-center ${index === 0 ? 'text-blue-600' : 'text-gray-500'}`}>
                  <i className={`fas fa-${index === 0 ? 'home' : index === 1 ? 'car' : index === 2 ? 'chart-bar' : index === 3 ? 'receipt' : index === 4 ? 'inbox' : 'calendar-alt'} mr-3`}></i>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-gray-500 mb-8">
          <h2 className="text-sm font-semibold">PREFERENCES</h2>
          <ul className="mt-4">
            {["Settings", "Help & Center", "Dark Mode"].map((item, index) => (
              <li className="mb-4" key={index}>
                <a href="#" className="flex items-center text-gray-500">
                  <i className={`fas fa-${index === 0 ? 'cog' : index === 1 ? 'question-circle' : 'moon'} mr-3`}></i>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-gray-500">
          <a href="#" className="flex items-center text-gray-500">
            <i className="fas fa-sign-out-alt mr-3"></i>
            Log Out
          </a>
        </div>
      </aside>
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-2 bg-white p-4 sm:p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Details Rental</h2>
            <div className="bg-gray-100 p-2 sm:p-4 rounded-lg mb-4">
              <img src="/Maps.png" alt="Map showing rental details" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <div className="flex items-center mb-4">
              <img src="/z.png" alt="Nissan GT-R" className="w-20 h-12 object-cover rounded-lg mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Nissan GT - R</h3>
                <p className="text-gray-500">Sport Car</p>
              </div>
              <span className="ml-auto text-gray-500">#9761</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="text-sm font-semibold mb-2">Pick - Up</h4>
                <div className="bg-gray-100 p-2 rounded-lg mb-2">
                  <p className="text-gray-500">Locations</p>
                  <p>Kota Semarang</p>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg mb-2">
                  <p className="text-gray-500">Date</p>
                  <p>20 July 2022</p>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg">
                  <p className="text-gray-500">Time</p>
                  <p>07.00</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2">Drop - Off</h4>
                <div className="bg-gray-100 p-2 rounded-lg mb-2">
                  <p className="text-gray-500">Locations</p>
                  <p>Kota Semarang</p>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg mb-2">
                  <p className="text-gray-500">Date</p>
                  <p>21 July 2022</p>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg">
                  <p className="text-gray-500">Time</p>
                  <p>01.00</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-sm font-semibold mb-2">Total Rental Price</h4>
              <p className="text-gray-500 mb-2">Overall price and includes rental discount</p>
              <p className="text-2xl font-semibold">$80.00</p>
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Top 5 Car Rental</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <svg className="w-32 h-32" viewBox="0 0 36 36">
                  <path className="text-blue-500" strokeDasharray="72, 100" d="M18 2.0845a15.9155 15.9155 0 1 0 0 31.831 15.9155 15.9155 0 1 0 0-31.831"></path>
                  <path className="text-blue-300" strokeDasharray="28, 100" d="M18 2.0845a15.9155 15.9155 0 1 0 0 31.831 15.9155 15.9155 0 1 0 0-31.831"></path>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-semibold">72,030</span>
                </div>
              </div>
            </div>
            <ul>
              {[
                { name: 'Sport Car', count: '17,439' },
                { name: 'SUV', count: '9,478' },
                { name: 'Coupe', count: '18,197' },
                { name: 'Hatchback', count: '12,510' },
                { name: 'MPV', count: '14,406' },
              ].map((car, index) => (
                <li className="flex justify-between mb-2" key={index}>
                  <span>{car.name}</span>
                  <span>{car.count}</span>
                </li>
              ))}
            </ul>
            <div className="bg-white p-4 rounded-lg shadow mt-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Recent Transaction</h2>
                <a href="#" className="text-blue-600">View All</a>
              </div>
              <ul>
                {[
                  { img: "/zz.png", name: "Nissan GT-R", date: "20 July", price: "$80.00" },
                  { img: "/zzz.png", name: "Koenigsegg", date: "19 July", price: "$99.00" },
                  { img: "/zzzz.png", name: "Rolls-Royce", date: "18 July", price: "$96.00" },
                  { img: "/zzzzz.png", name: "CR-V", date: "17 July", price: "$80.00" },
                ].map((transaction, index) => (
                  <li className="flex justify-between items-center mb-4" key={index}>
                    <div className="flex items-center">
                      <img src={transaction.img} alt={transaction.name} className="w-20 h-12 object-cover rounded-lg mr-4" />
                      <div>
                        <h3 className="text-lg font-semibold">{transaction.name}</h3>
                        <p className="text-gray-500">{transaction.name.includes('GT-R') ? 'Sport Car' : 'SUV'}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500">{transaction.date}</p>
                      <p className="text-lg font-semibold">{transaction.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
