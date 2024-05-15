// import logo from './logo.svg';
// import './App.css';
// import HotelApp from './HotelApp';
import "./App.css";
import React from "react";
import { useState } from "react";
// import { ThemeProvider, useTheme } from "./ThemeContext";
// import Switch from "./Switch";

// function App() {
//   return (
//     <div className="App">

//       <HotelApp />
      
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import "./App.css";
// import { validateEmail } from "./utils";
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


//NEW REGISTER FORM CODE


// const PasswordErrorMessage = () => {
//   return (
//     <p className="FieldError">Password should have at least 8 characters</p>
//   );
// };

// function validateEmail(email) {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(String(email).toLowerCase());
// }

// function App() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState({
//     value: "",
//     isTouched: false,
//   });
//   const [role, setRole] = useState("role");

//   const getIsFormValid = () => {
//     return (
//       firstName !== "" &&
//       validateEmail(email) &&
//       password.value.length >= 8 &&
//       (role === "individual" || role === "business")
//     );
//   };

//   const clearForm = () => {
//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setPassword({ value: "", isTouched: false });
//     setRole("role");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (getIsFormValid()) {
//       alert("Account created!");
//       clearForm();
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case "firstName":
//         setFirstName(value);
//         break;
//       case "lastName":
//         setLastName(value);
//         break;
//       case "email":
//         setEmail(value);
//         break;
//       case "password":
//         setPassword((prevState) => ({ ...prevState, value }));
//         break;
//       case "role":
//         setRole(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleBlur = () => {
//     setPassword((prevState) => ({ ...prevState, isTouched: true }));
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <h2>Sign Up</h2>
//           <div className="Field">
//             <label htmlFor="firstName">
//               First name <sup>*</sup>
//             </label>
//             <input
//               name="firstName"
//               placeholder="First name"
//               value={firstName}
//               onChange={(e) => { 
//                 setFirstName(e.target.value); 
//               }} 
//             />
//           </div>
//           <div className="Field">
//             <label htmlFor="lastName">Last name</label>
//             <input
//               name="lastName"
//               placeholder="Last name"
//               value={lastName}
//               onChange={(e) => { 
//                 setLastName(e.target.value); 
//               }} 
//             />
//           </div>
//           <div className="Field">
//             <label htmlFor="email">
//               Email address <sup>*</sup>
//             </label>
//             <input
//               name="email"
//               placeholder="Email address"
//               value={email}
//               onChange={(e) => { 
//                 setEmail(e.target.value); 
//               }} 
//             />
//           </div>
//           <div className="Field">
//             <label htmlFor="password">
//               Password <sup>*</sup>
//             </label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={password.value}
//               onChange={(e) => { 
//                 setPassword( {...password, value: e.target.value}); 
//               }} 
//               onBlur={() => { 
//                 setPassword({ ...password, isTouched: true }); 
//               }} 
//             />
//             {password.isTouched && password.value.length < 8 && (
//               <PasswordErrorMessage />
//             )}
//           </div>
//           <div className="Field">
//             <label htmlFor="role">
//               Role <sup>*</sup>
//             </label>
//             <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
//               <option value="role">Role</option>
//               <option value="individual">Individual</option>
//               <option value="business">Business</option>
//             </select>
//           </div>
//           <button type="submit" disabled={!getIsFormValid()}>
//             Create account
//           </button>
//         </fieldset>
//       </form>
//     </div>
//   );
// }

// export default App;


//ANOTHER NEW MY GOALS CODE


// function GoalForm(props){
//   const [formData, setFormData] = React.useState({goal: "", by: ""});

//   function changeHandler(e) {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   }

//   function submitHandler(e){
//     e.preventDefault();
//     props.onAdd(formData);
//     setFormData({goal:"", by:""});
//   };

//   return(
//     <>
//       <h1>My Little Lemon Goals</h1>
//       <form onSubmit={submitHandler}>
//         <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler} /> 
//         <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler} />
//         <button>Submit Goal</button> 
//       </form>
//     </>
//   );
// }

// function ListOfGoals(props) {
//   return(
//     <ul>
//       {props.allGoals.map((g) => (
//         <li key={g.goal}>
//           <span>My goal is to {g.goal}, by {g.by}</span>
//         </li>
//       ))}
//     </ul>
//   );
// }

// const App = () => { 
//   const [allGoals, updateAllGoals ] = React.useState([]);

//   function addGoal(goal) {
//     updateAllGoals([...allGoals, goal]);
//   }

//   return ( 
//     <div className="App">
//       <GoalForm onAdd={addGoal} />
//       <ListOfGoals allGoals={allGoals} />
//     </div>
//   );
// }
 
// export default App;


// ANOTHER NEW SWITCH THEME CODE

// const Title = ({ children }) => {
//   const { theme } = useTheme();
//   return (
//     <h2
//       style={{
//         color: theme === "light" ? "black" : "white",
//       }}
//     >
//       {children}
//     </h2>
//   );
// };

// const Paragraph = ({ children }) => {
//   const { theme } = useTheme();
//   return (
//     <p
//       style={{
//         color: theme === "light" ? "black" : "white",
//       }}
//     >
//       {children}
//     </p>
//   );
// };

// const Content = () => {
//   return (
//     <div>
//       <Paragraph>
//         We are a pizza loving family. And for years, I searched and searched and
//         searched for the perfect pizza dough recipe. I tried dozens, or more.
//         And while some were good, none of them were that recipe that would
//         make me stop trying all of the others.
//       </Paragraph>
//     </div>
//   );
// };

// const Header = () => {
//   return (
//     <header>
//       <Title>Little Lemon 🍕</Title>
//       <Switch />
//     </header>
//   );
// };

// const Page = () => {
//   return (
//     <div className="Page">
//       <Title>When it comes to dough</Title>
//       <Content />
//     </div>
//   );
// };

// function App() {
//   const { theme } = useTheme();
//   return (
//     <div
//       className="App"
//       style={{
//         backgroundColor: theme === "light" ? "white" : "black",
//       }}
//     >
//       <Header />
//       <Page />
//     </div>
//   );
// }

// function Root() {
//   return (
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//   );
// }

// export default Root;


//ANOTHER NEW GIFT CARD CODE


export default function App() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    setGiftCard((prevState) => {
      return {
        ...prevState,
        text: "Your coupon has been used.",
        valid: false,
        instructions: "Please visit our restaurant to renew your gift card.",
      };
    });
  }

  return (
    <div style={{padding: '40px'}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}
