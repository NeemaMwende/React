// LiveOrdersList.js
import React, { useState, useEffect } from 'react';
import DataSource from './DataSource';
import LiveOrders from './LiveOrders';

function LiveOrdersList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const handleNewOrders = () => {
      const newOrders = DataSource.getOrders();
      setOrders(newOrders);
    };

    DataSource.addListener(handleNewOrders);

    return () => {
      DataSource.removeListener(handleNewOrders);
    };
  }, []);

  return <LiveOrders orders={orders} />;
}

export default LiveOrdersList;
