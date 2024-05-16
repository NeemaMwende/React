// import logo from './logo.svg';
// import React from 'react';
// import LiveOrdersList from './LiveOrdersList';
// import HOC from "./HOC"
// import './App.css';
// import HotelApp from './HotelApp';
// import "./App.css";
import MyForm from "./MyForm";
// import React from "react";
// import { RadioGroup, RadioOption} from './Radio';
// import useConsoleLog from "./useConsoleLog";
// import { useEffect , useState} from "react";
// import { useState, useEffect, useRef } from "react";
// import { ThemeProvider, useTheme } from "./ThemeContext";
// import Switch from "./Switch";
// import { useState, useEffect }from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// function App() {
//   return (
//     <div className="App">

// import RenderProps from "./RenderProps";
// import Comparison from "./Comparison"
// import MouseRender from "./MouseRender"

// const { useState, useEffect } = require("react");

// const { Children } = require("react");

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


// export default function App() {
//   const [giftCard, setGiftCard] = useState(
//     {
//         firstName: "Jennifer",
//         lastName: "Smith",
//         text: "Free dinner for 4 guests",
//         valid: true,
//         instructions: "To use your coupon, click the button below.",
//     }
//   );

//   function spendGiftCard() {
//     setGiftCard((prevState) => {
//       return {
//         ...prevState,
//         text: "Your coupon has been used.",
//         valid: false,
//         instructions: "Please visit our restaurant to renew your gift card.",
//       };
//     });
//   }

//   return (
//     <div style={{padding: '40px'}}>
//       <h1>
//         Gift Card Page
//       </h1>
//       <h2>
//         Customer: {giftCard.firstName} {giftCard.lastName}
//       </h2>
//       <h3>
//         {giftCard.text}
//       </h3>
//       <p>
//         {giftCard.instructions}
//       </p>
//       {
//         giftCard.valid && (
//           <button onClick={spendGiftCard}>
//             Spend Gift Card
//           </button>
//         )
//       }
//     </div>
//   );
// }

//USE EFFECT EXAMPLE CODE

// function LittleLemonChat(props) { 
//   const [status, setStatus] = useState('offline'); 

//   useEffect(() => { 
//     LemonChat.subscribeToMessages(props.chatId, () => setStatus('online')); 

//     return () => { 
//       setStatus('offline'); 
//       LemonChat.unsubscribeFromMessages(props.chatId); 
//     }; 
//   }, [props.chatId]); 

//   // The rest of the component code...
// }

// function App(){
//   const [toggle, setToggle] = React.useState(false);

//   const clickHandler = () => {
//     setToggle(!toggle);
//   }

//   React.useEffect(() => {
//     document.title = toggle ? "Welcome to little lemon" : "Using the UseEffect hook"
//   },[toggle]);

//   return(
//     <div>
//       <h1>Using the useEffect Hook </h1>
//       <button onClick={clickHandler}>Toggle Message</button>
//       {toggle && <h2>Welcome to Little Lemon</h2>}
//     </div>
//   )
// }

// export default App;

//ANOTHER EXAMPLE

 
// export default function App() { 
//   const [btcData, setBtcData] = useState({}); 
 
//   const fetchData = () => { 
//     fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
//       .then((response) => response.json()) 
//       .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
//       .catch((error) => console.log(error)); 
//   }; 
 
//   useEffect(() => { 
//     fetchData(); 
//   }, []); 
 
//   return ( 
//     <> 
//       <h1>Current BTC/USD data</h1> 
//       <p>Code: {btcData.code}</p> 
//       <p>Symbol: {btcData.symbol}</p> 
//       <p>Rate: {btcData.rate}</p> 
//       <p>Description: {btcData.description}</p> 
//       <p>Rate Float: {btcData.rate_float}</p> 
//     </> 
//   ); 
// } 

//ALTERNATIVELY

 
// export default function App() { 
//   const [btcData, setBtcData] = useState({}); 
//   useEffect(() => { 
//     fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
//       .then((response) => response.json()) 
//       .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
//       .catch((error) => console.log(error)); 
//   }, []); 
 
//   return ( 
//     <> 
//       <h1>Current BTC/USD data</h1> 
//       <p>Code: {btcData.code}</p> 
//       <p>Symbol: {btcData.symbol}</p> 
//       <p>Rate: {btcData.rate}</p> 
//       <p>Description: {btcData.description}</p> 
//       <p>Rate Float: {btcData.rate_float}</p> 
//     </> 
//   ); 
// } 


// A DIFFERENT EXAMPLE
// function App(){
//   const [user, setUser] = React.useState([]);

//   const fetchData = () => {
//     fetch("https://randomuser.me/api/?results-1")
//     .then(response => response.json())
//     .then(data => setUser(data));
//   }

//   React.useEffect(() => {
//     fetchData();
//   },[]);

//   return Object.keys(user).length > 0 ? (
//     <div>
//       <h1>Data returned</h1>
//       <h2>First Name: {user.results[0].name.first}</h2>
//       <h2>Last Name: {user.results[0].name.last}</h2>
//     </div>
//   ) : (
//     <h1>Data pending...</h1>
//   );
// }

// export default App;

//THE USEREDUCER HOOK

// const reducer = (state, action) => {
//   if(action.type === 'buy_ingredients')return{money: state.money - 10};
//   if(action.type === 'sell_a_meal')return{money: state.money + 100};
//   if(action.type === 'celebrity_visits')return{money: state.money + 5000};
//   return state;
// }

// function App(){
//   const initialState = {money: 100};
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return(
//     <div className="App">
//       <h1>Wallet:{state.money}</h1>
//       <div>
//         <button onClick={() => dispatch({type:'buy_ingredients'})}>Shopping for veggies</button>
//         <button onClick={() => dispatch({type:'sell_a_meal'})}>Serve a meal to the Customer</button>
//         <button onClick={() => dispatch({type:'celebrity_visits'})}>Celebrity visit</button>
//       </div>
//     </div>
//   );
// }

// export default App;

//USEREF HOOK

// function App(){

//   const formInputRef = React.useRef(null);
//   const focusInput = () => {
//     formInputRef.current.focus();
//   }

//   return(
//     <>
//       <h1>Using useRef to access underlying DOM</h1>
//       <input type="text" ref={formInputRef}/>
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// }

// export default App;

//USE OF CUSTOM HOOKS

 
// function App() { 
//   const [count, setCount] = useState(0); 
//   useConsoleLog(count);
 
//   function increment() { 
//     setCount(prevCount => prevCount + 1) 
//   } 
 
//   return ( 
//     <div> 
//       <h1>Count: {count}</h1> 
//       <button onClick={increment}>Plus 1</button> 
//     </div> 
//   ); 
// } 
 
// export default App; 

//MY CUSTOM MADE HOOK

// export default function App() {
//   const [day, setDay] = useState("Monday");
//   const prevDay = usePrevious(day);
//   const getNextDay = () => {
//     if (day === "Monday") {
//       setDay("Tuesday")
//     } else if (day === "Tuesday") {
//       setDay("Wednesday")
//     } else if (day === "Wednesday") {
//       setDay("Thursday")
//     } else if (day === "Thursday") {
//       setDay("Friday")
//     } else if (day === "Friday") {
//       setDay("Monday")
//     }
//   }
//   return (
//     <div style={{padding: "40px"}}>
//       <h1>
//         Today is: {day}<br />
//         {
//           prevDay && (
//             <span>Previous work day was: {prevDay}</span>
//           )
//         }
//       </h1>
//       <button onClick={getNextDay}>
//         Get next day
//       </button>
//     </div>
//   );
// }
// function usePrevious(val) {
//   const ref = useRef(); // Step 1

//   useEffect(() => { // Step 2
//     ref.current = val; // Step 3
//   }, [val]); // Step 3

//   return ref.current; // Step 4
// }

// // export default App;

// //DIALOG : CONTAINMENT AND SPECIALIZATION

// function Dialog(props) {
//   return (
//     <div className="modal">
//       {props.children}
//     </div>
//   );
// }

// function ConfirmationDialog(){
//   return {
//     <Dialog color="blue">
//       <h1 className="Dialog-title"> Thanks </h1>
//       <p className="Dialog-message">We will process your order in less than 24 hours</p>
//     </Dialog>
//   }
// }


//AN ALERT BOX 


// const Button = ({ children, backgroundColor }) => {
//   return (
//     <button style={{ backgroundColor }}>{children}</button>
//   );
// };

// const Alert = ({ children }) => {
//   return (
//     <>
//       <div className="Overlay" />
//       <div className="Alert">{children}</div>
//     </>
//   );
// };

// const DeleteButton = () => {
//   return <Button backgroundColor="red">Delete</Button>;
// };

// function App() {
//   return (
//     <div className="App">
//       <header>Little Lemon Restaurant</header>

//       <Alert>
//         <h4>Delete Account</h4>
//         <p>
//           Are you sure you want to delete your Account? 
//           You will miss out on all the delicacies!
//         </p>
//       </Alert>

//       <DeleteButton />
//     </div>
//   );
// }

// export default App;


// //TOAST TO REPLACE ALERT

// const Button = ({ children, backgroundColor }) => {
//   return (
//     <button style={{ backgroundColor }}>{children}</button>
//   );
// };

// function App() {
//   const handleDeleteClick = () => {
//     toast.error("Are you sure you want to delete your Account? You will miss out on all the delicacies!");
//   };

//   return (
//     <div className="App">
//       <header>Little Lemon Restaurant</header>

//       <ToastContainer />

//       <h4>Delete Account</h4>
//       <p>
//         Are you sure you want to delete your Account? 
//         You will miss out on all the delicacies!
//       </p>
//       <Button onClick={handleDeleteClick} backgroundColor="red">Delete</Button>
//     </div>
//   );
// }

// export default App;


//MANIPULATING CHILDREN DYNAMICALLY IN JSX

// const Row = ({ children, childStyle }) => {
//   return (
//     <div className="Row">
//       {React.Children.map(children, (child, index) => {
//         return React.cloneElement(child, {
//           style: {
//             ...(child.props.style || {}), // Ensure child.props.style exists
//             ...(index > 0 ? childStyle : {}), // Apply conditional style
//           },
//         });
//       })}
//     </div>
//   );
// };


// function LiveOrders(){
//   return (
//     <div>
//       <Row spacing="{32}">
//         <p>Pizza Margarita</p>
//         <p>2</p>
//         <p>300</p>
//         <p>18:38</p>
//         <p>John</p>
//       </Row>
//     </div>
//   )
// }

// export default LiveOrders;

//RADIO BUTTON GROUPING

// function App() {
//   const [selected, setSelected] = useState("");
//   return (
//     <div className="App">
//       <h2>How did you hear about Little Lemon?</h2>
//       <RadioGroup onChange={setSelected} selected={selected}>
//         <RadioOption value="social_media">Social Media</RadioOption>
//         <RadioOption value="friends">Friends</RadioOption>
//         <RadioOption value="advertising">Advertising</RadioOption>
//         <RadioOption value="other">Other</RadioOption>
//       </RadioGroup>
//       <button disabled={!selected}>Submit</button>
//     </div>
//   );
// }

// export default App;


// SPREAD ATTRIBUTES

// const Button = ({ type, children, ...buttonProps }) => {
//   const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
//   return {
//     <button className={}>
//     {children}
//     </button>
//   }
// }

//LIVE ORDERS LIST
// App.js


// function App() {
//   return (
//     <div className="App">
//       <h1>Restaurant Orders</h1>
//       <LiveOrdersList />
//     </div>
//   );
// }

// export default App;
{/* <HOC /> */}
{/* <RenderProps /> */}
const App = () => {
  return ( 
    <>
    {/* <Comparison />
    <MouseRender /> */}
    <MyForm />
    </>
   );
}
 
export default App;