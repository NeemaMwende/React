// LiveOrders.js
import React from 'react';

const LiveOrders = ({ orders }) => {
  return (
    <div className="LiveOrders">
      <h3>Live Orders</h3>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.item} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveOrders;
