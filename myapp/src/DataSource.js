const listeners = new Set();

const orders = [
  { id: 1, item: 'Pizza', status: 'Preparing' },
  { id: 2, item: 'Burger', status: 'Delivering' },
  { id: 3, item: 'Burger', status: 'Delivering' },
  { id: 4, item: 'Burger', status: 'Delivering' },
  { id: 5, item: 'Burger', status: 'Delivering' },
  { id: 6, item: 'Burger', status: 'Delivering' },
  { id: 7, item: 'Burger', status: 'Delivering' },
  { id: 8, item: 'Burger', status: 'Delivering' },
  { id: 9, item: 'Burger', status: 'Delivering' },
  { id: 10, item: 'Burger', status: 'Delivering' },
  { id: 11, item: 'Burger', status: 'Delivering' },
  // ... other orders
];

const DataSource = {
  getOrders: async () => {
    try {
      const response = await fetch('https://randomuser.me/api/0.8/?results=10');
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }
      const data = await response.json();
      return data.results; // Assuming the JSON response contains an array called 'results'
    } catch (error) {
      console.error('Error fetching orders:', error);
      return []; // Return an empty array or handle the error accordingly
    }
  },

  addListener: (listener) => {
    listeners.add(listener);
  },

  removeListener: (listener) => {
    listeners.delete(listener);
  },

  // Method to simulate new orders being added
  simulateNewOrder: (newOrder) => {
    orders.push(newOrder);
    listeners.forEach(listener => listener());
  }
};

export default DataSource;
