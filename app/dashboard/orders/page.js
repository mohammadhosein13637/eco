// OrdersPage.js
import React from 'react';

const OrdersPage = () => {
    const orders = [
        { id: 1, status: 'Pending' },
        { id: 2, status: 'Shipped' },
        { id: 3, status: 'Delivered' },
        // Add more order data as needed
    ];

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Orders</h1>
            <div className="flex flex-wrap space-x-4 mb-4">
                {orders.map(order => (
                    <div key={order.id} className="flex-1 w-full md:w-auto">
                        <div className="bg-gray-200 px-4 py-2 rounded-md text-center text-black">
                            {order.status}
                        </div>
                    </div>
                ))}
            </div>
            <div className="max-w-lg mx-auto">
                <h2 className="text-xl font-bold mb-2">All Orders</h2>
                <ul>
                    {orders.map(order => (
                        <li key={order.id} className="border-b border-gray-300 py-2">
                            Order ID: {order.id}
                            {/* Add more order information here */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OrdersPage;
