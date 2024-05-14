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

import { useState } from "react";
import "./App.css";
// import DessertsList from "./DessertsList";
// import MyForm from "./MyForm";

// const desserts = [
//   {
//     name: "Chocolate Cake",
//     calories: 400,
//     createdAt: "2022-09-01",
//   },
//   {
//     name: "Ice Cream",
//     calories: 200,
//     createdAt: "2022-01-02",
//   },
//   {
//     name: "Tiramisu",
//     calories: 300,
//     createdAt: "2021-10-03",
//   },
//   {
//     name: "Cheesecake",
//     calories: 600,
//     createdAt: "2022-01-04",
//   },
// ];

// const Lists = DessertsList.map(desserts => {
//   const itemLists = `${name} - ${calories.sort(a,b)}` 
// })

function App() {
//   const [name, setName] = useState("");
//   const [score, setScore] = useState("10");
//   const [comment, setComment] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setName("");
  //   console.log("form submitted");
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (Number(score) <= 5 && comment.length <=10) 
  //     {
  //       alert("Please provide a comment explaining why the experience");
  //     }
  //     console.log("Form submitted!");
  //     setComment("");
  //     setScore("10");
  // }

  return (
    <div className="App">
      {/* <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} /> */}

      {/* //uncontrolled form  */}
      {/* <MyForm />
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
      <form onSubmit={handleSubmit}> 
        <fieldset>
          <div className="field">
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form> */}

    {/* <h2>Please give us a review </h2>
    <h4>Your Welcome</h4>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback Form</h2>
          <div className="Field">
            <label>Score: {score}</label>
            <input type="range" min={0} max={10} value={score} onChange={e => setScore(e.target.value)}/>
          </div>
          <div className="Field">
            <label htmlFor="comment">Comment</label>
            <textarea value={comment} onChange={e => setComment(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form> */}
    </div>
  );
}

export default App;
