import React from 'react';
import "../globals.css";


const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
                    <aside className="w-64 bg-white p-6">
                        <div className="text-gray-500 mb-8">
                            <h2 className="text-sm font-semibold">MAIN MENU</h2>
                            <ul className="mt-4">
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-blue-600">
                                        <i className="fas fa-home mr-3"></i>
                                        Dashboard
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-gray-500">
                                        <i className="fas fa-car mr-3"></i>
                                        Car Rent
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-gray-500">
                                        <i className="fas fa-chart-bar mr-3"></i>
                                        Insight
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-gray-500">
                                        <i className="fas fa-receipt mr-3"></i>
                                        Reimburse
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-gray-500">
                                        <i className="fas fa-inbox mr-3"></i>
                                        Inbox
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-gray-500">
                                        <i className="fas fa-calendar-alt mr-3"></i>
                                        Calendar
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-gray-500 mb-8">
                            <h2 className="text-sm font-semibold">PREFERENCES</h2>
                            <ul className="mt-4">
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-gray-500">
                                        <i className="fas fa-cog mr-3"></i>
                                        Settings
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-gray-500">
                                        <i className="fas fa-question-circle mr-3"></i>
                                        Help & Center
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-gray-500">
                                        <i className="fas fa-moon mr-3"></i>
                                        Dark Mode
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-gray-500">
                            <a href="#" className="flex items-center text-gray-500">
                                <i className="fas fa-sign-out-alt mr-3"></i>
                                Log Out
                            </a>
                        </div>
                    </aside>
                    <main className="flex-1 p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="col-span-2 bg-white p-6 rounded-lg shadow">
                                <h2 className="text-lg font-semibold mb-4">Details Rental</h2>
                                <div className="bg-gray-100 p-4 rounded-lg mb-4">
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
                                <div className="grid grid-cols-2 gap-4 mb-4">
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
                            <div className="bg-white p-6 rounded-lg shadow">
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
                                    <li className="flex justify-between mb-2">
                                        <span>Sport Car</span>
                                        <span>17,439</span>
                                    </li>
                                    <li className="flex justify-between mb-2">
                                        <span>SUV</span>
                                        <span>9,478</span>
                                    </li>
                                    <li className="flex justify-between mb-2">
                                        <span>Coupe</span>
                                        <span>18,197</span>
                                    </li>
                                    <li className="flex justify-between mb-2">
                                        <span>Hatchback</span>
                                        <span>12,510</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>MPV</span>
                                        <span>14,406</span>
                                    </li>
                                </ul>
                                <div className="bg-white p-6 rounded-lg shadow">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-lg font-semibold">Recent Transaction</h2>
                                    <a href="#" className="text-blue-600">View All</a>
                                </div>
                                <ul>
                                    <li className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <img src="/zz.png" alt="Nissan GT-R" className="w-20 h-12 object-cover rounded-lg mr-4" />
                                            <div>
                                                <h3 className="text-lg font-semibold">Nissan GT - R</h3>
                                                <p className="text-gray-500">Sport Car</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-gray-500">20 July</p>
                                            <p className="text-lg font-semibold">$80.00</p>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <img src="/zzz.png" alt="Koenigsegg" className="w-20 h-12 object-cover rounded-lg mr-4" />
                                            <div>
                                                <h3 className="text-lg font-semibold">Koenigsegg</h3>
                                                <p className="text-gray-500">Sport Car</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-gray-500">19 July</p>
                                            <p className="text-lg font-semibold">$99.00</p>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <img src="/zzzz.png" alt="Rolls-Royce" className="w-20 h-12 object-cover rounded-lg mr-4" />
                                            <div>
                                                <h3 className="text-lg font-semibold">Rolls - Royce</h3>
                                                <p className="text-gray-500">Sport Car</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-gray-500">18 July</p>
                                            <p className="text-lg font-semibold">$96.00</p>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <img src="/zzzzz.png" alt="CR-V" className="w-20 h-12 object-cover rounded-lg mr-4" />
                                            <div>
                                                <h3 className="text-lg font-semibold">CR - V</h3>
                                                <p className="text-gray-500">SUV</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-gray-500">17 July</p>
                                            <p className="text-lg font-semibold">$80.00</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            </div>
                           
                        </div>
                    </main>
                </div>
            );
        };

export default Dashboard;
