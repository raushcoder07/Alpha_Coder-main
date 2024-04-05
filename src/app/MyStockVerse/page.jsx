// pages/profile.js
"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import userData1 from "../../libs/data";

export default function Profile() {

    const [session, setsession] = useState(true);
    const [loder, setloder] = useState(false);
    const [userData, setUserData] = useState();

    useEffect(() => {
        // Set user data when the component mounts
        setUserData(userData1);
    }, []);

    const handleUpdateUserData = (updatedData) => {
        // Update user data
        setUserData(updatedData);
    };

   
    
    return (
       <div className="mb-8">
            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Name</dt>
                        <dd className="text-gray-700 sm:col-span-2">{userData && userData.name}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Total Cash</dt>
                        <dd className="text-gray-700 sm:col-span-2">₹ {userData && userData.totalCash}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Total Coins</dt>
                        <dd className="text-gray-700 sm:col-span-2">{userData && userData.totalCoins}</dd>
                    </div>

                </dl>
            </div>

            {/* Display purchased stocks */}
            <h1 className="mt-2 mb-2 text-center font-bold text-3xl">Positions</h1>
            
            {/* Loop through purchased stocks and display them */}
            {session && userData1.purchasedStocks.map((stock, index) => (
                <article key={index} className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
                    <div>
                        <div className="flex gap-2">
                            <p className="text-lg">{stock.companyName}</p>
                            <p className="text-lg">Quantity: {stock.quantity}</p>
                        </div>
                        <p className="text-sm text-gray-500">Profit</p>
                        <p className="text-2xl font-medium text-gray-900">₹ {stock.profit}</p>
                    </div>

                    <div className={`inline-flex gap-2 rounded ${stock.percentage >= 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'} p-1`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={stock.percentage >= 0 ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"}
                            />
                        </svg>

                        <span className="text-xs font-medium">{stock.percentage}%</span>
                    </div>
                </article>
            ))}
            
        </div>
    );
}
