import './App.css';
import Header from './Header.js';
import Home from './Home.js'
import Login from './Login.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout.js';
import React from 'react';
import { useEffect } from 'react';
import { auth } from './firebase.js';
import { useStateValue } from './StateProvider.js';
import Payment from './Payment.js';
import Oorders from './Oorders.js';



function App() {
  const [{},dispatch]=useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('THE USER IS >>>',authUser);

      if (authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
        }

      
      else{
        dispatch({
          type:'SET_USER',
          user:null
        
      })}
    })
  },[])


  return (
  <Router>
    <div className="app">
    <Switch>
      <Route path="/orders">
      <Header/>
<Oorders/>          


      </Route>
      <Route path="/login">
      <Login/>
      </Route>

      <Route path="/checkout">
      <Header/>
      <Checkout/>
      </Route>
      <Route path="/payment">
      <Header/>
      <Payment/>
      </Route>
    <Route path="/">
      <Header/>
      <Home/>
    </Route>
    </Switch>
    </div>
    </Router>
  );
}

//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/checkout" element={<><Header /><Checkout /></>} />
//           <Route path="/" element={<><Header /><Home /></>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

export default App;
