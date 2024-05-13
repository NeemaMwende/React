// HotelApp.js
import React from 'react';

const foods = [
    {
        id: "1",
        title: "Beef Stew with rice",
        image: "images(1).jpeg",
        price: "$100.00"
    },
    {
        id: "2",
        title: "Ugali Meat",
        image: "images.jpeg",
        price: "$150.00"
    },
    {
        id: "3",
        title: "Cheesburger and waffles",
        image: "images(2).jpeg",
        price: "$200.00"
    }
];


const HotelApp = () => {
  return (
    <div>
      <h1>Hotel Name</h1>
      <div className="food-list">
        {/* {foods.map(food => (
          <div key={food.id} className="food-item">
            <h2>{food.title}</h2>
            <img src={require(`./images/${food.image}`).default} alt={food.title} />
            <p>{food.description}</p>
            <p>{food.price}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default HotelApp;
