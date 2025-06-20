import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Routing_ from './Components/New/Routing_';
import { createContext, useEffect, useState } from 'react';

export const Logindata=createContext();
export const cartcontext=createContext();
export const checkLogin=createContext();
export const DataAuth=createContext();

function App() {
  const [DoLogin,SetDoLogin]=useState(false)
  const [Token,SetToken]=useState("")
  const [cartItems,SetCartItems]=useState([])
  const [wishlist,Setwishlist]=useState([])
  const [Data,setData]=useState({})
  
  const addToCart = (item) => {
    SetCartItems((prevItems) => [...prevItems, item]);
  };
  const removeToCart = (item) => {
    SetCartItems(cartItems.filter((e)=>e._id!==item._id));
  };
  const incrementItem = (item) => {
    SetCartItems(cartItems.map((e)=>e._id===item._id?{...e,Quantity:e.Quantity+1}:e));
  };
  const decrementItem = (item) => {
    SetCartItems(cartItems.map((e)=>e._id===item._id?{...e,Quantity:e.Quantity-1}:e));
  };

  const wishlistItems = (item) => {
    Setwishlist((prevItems) => [...prevItems, item]);
  };
  const removewishlistItems = (item) => {
    Setwishlist(wishlist.filter((e)=>e._id!==item._id));
  };
  

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      SetToken(storedToken);
      SetDoLogin(true);
    }
  }, []);
  
  console.log(Data);
  return (
    <div>
      {/* <TicTacToe/> */}
      <DataAuth.Provider value={[Data,setData]}>
      <checkLogin.Provider value={[Token,SetToken]}>
      <Logindata.Provider value={[DoLogin,SetDoLogin]}>
        <cartcontext.Provider value={{addToCart,wishlist,wishlistItems,incrementItem,decrementItem,removewishlistItems,removeToCart,cartItems}}>
        <Routing_/>
        </cartcontext.Provider>
      </Logindata.Provider>
      </checkLogin.Provider>
      </DataAuth.Provider>
    </div>
  );
}

export default App;
