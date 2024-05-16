// DataSource.js
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
  getOrders() {
    return orders;
  },

  addListener(listener) {
    listeners.add(listener);
  },

  removeListener(listener) {
    listeners.delete(listener);
  },

  // Method to simulate new orders being added
  simulateNewOrder(newOrder) {
    orders.push(newOrder);
    listeners.forEach(listener => listener());
  }
};

export default DataSource;
