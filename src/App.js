import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe(
	'pk_test_51KgA2IF4t79aEBfsy6wJdRzbnTx8cqXzYdNOw08PaBTVQq8Dcx8DYYCNzvvPoMl7bi9P4ssfhsGh5ycpzkeL6UPv00cSOT3rSy'
  );
  

function App() {

	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
		  console.log("THE USER IS >>> ", authUser);
		  if (authUser) {
			// the user just logged in / the user was logged in
	
			dispatch({
			  type: "SET_USER",
			  user: authUser,
			});
		  } else {
			// the user is logged out
			dispatch({
			  type: "SET_USER",
			  user: null,
			});
		  }
		});
	  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
        
                    <Route path="/Orders" element={
						<>
						<Header />
						<Orders /> 
						 
						</>
					}	/>
					 <Route path="/Login" element={
						<>
						<Login />  
						</>
					}	/>
					<Route path="/checkout" element={
						<>
						 <Header /> 
                         <Checkout />
						</>
					}	/>
					<Route path="/Payment" element={
						<>
						<Header />
						<Elements stripe={promise}>
                        <Payment />
                        </Elements>
						</>
					}	/>
                    <Route path="/" element={
						<>
						 <Header />
						 <Home />  
						</>
					}	/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
