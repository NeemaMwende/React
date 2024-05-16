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

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const fetchedOrders = await DataSource.getOrders();
        setOrders(fetchedOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders(); // Call the fetchOrders function when the component mounts

    // Cleanup function
    return () => {
      // Perform cleanup if necessary
    };
  }, []); // Empty dependency array means this effect runs only once, on mount


  return <LiveOrders orders={orders} />;
}

export default LiveOrdersList;
