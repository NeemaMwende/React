import React from 'react';

function DessertsList({ data }) {
  // Filter desserts with less than 500 calories
  const lowCalorieDesserts = data
    .filter(dessert => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories); // Sort desserts by calories in ascending order

  return (
    <ul>
      {lowCalorieDesserts.map((dessert, index) => (
        <li key={index}>
          {dessert.name} - {dessert.calories} cal
        </li>
      ))}
    </ul>
  );
}

export default DessertsList;
