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
import { validateEmail } from "./utils";
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

// function App() {
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

  // return (
  //   <div className="App">
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
//     </div>
//   );
// }

// export default App;


//NEW CODE


const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

// function validateEmail(email) {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(String(email).toLowerCase());
// }

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    return (
      firstName !== "" &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      (role === "individual" || role === "business")
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getIsFormValid()) {
      alert("Account created!");
      clearForm();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword((prevState) => ({ ...prevState, value }));
        break;
      case "role":
        setRole(value);
        break;
      default:
        break;
    }
  };

  const handleBlur = () => {
    setPassword((prevState) => ({ ...prevState, isTouched: true }));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label htmlFor="firstName">
              First name <sup>*</sup>
            </label>
            <input
              name="firstName"
              placeholder="First name"
              value={firstName}
              onChange={handleChange}
            />
          </div>
          <div className="Field">
            <label htmlFor="lastName">Last name</label>
            <input
              name="lastName"
              placeholder="Last name"
              value={lastName}
              onChange={handleChange}
            />
          </div>
          <div className="Field">
            <label htmlFor="email">
              Email address <sup>*</sup>
            </label>
            <input
              name="email"
              placeholder="Email address"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="Field">
            <label htmlFor="password">
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password.value}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {password.isTouched && password.value.length < 8 && (
              <PasswordErrorMessage />
            )}
          </div>
          <div className="Field">
            <label htmlFor="role">
              Role <sup>*</sup>
            </label>
            <select name="role" value={role} onChange={handleChange}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;


