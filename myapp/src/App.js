// import logo from './logo.svg';
// import './App.css';
// import HotelApp from './HotelApp';

// function App() {
//   return (
//     <div className="App">

//       <HotelApp />
      
//     </div>
//   );
// }

// export default App;

import "./App.css";
import DessertsList from "./DessertsList";
import MyForm from "./MyForm";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

// const Lists = DessertsList.map(desserts => {
//   const itemLists = `${name} - ${calories.sort(a,b)}` 
// })

function App() {
  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />

      <MyForm />
    </div>
  );
}

export default App;
