import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import Pay from "./Pages/Pay";
const { getData } = require("./db/db");
const foods = getData();

const tele = window.Telegram.WebApp;
const public_key="CHAPUBK_TEST-Oo2ZaWPdcqTRnDFEf7mewXXSxByhEUXk"

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    tele.ready();
  });

  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };
const pay=(cartItems,public_key)=>{

};
  const onCheckout = () => {
pay();
    tele.MainButton.text = "Pay :)";
    tele.MainButton.show();
    tele.MainButton.show();
    tele.MainButton.onClick(()=>{
      return(
        <div>
        <form method="POST" action="https://api.chapa.co/v1/hosted/pay" >
    <input type="hidden" name="public_key" value="CHAPUBK_TEST-Oo2ZaWPdcqTRnDFEf7mewXXSxByhEUXk" />
    <input type="hidden" name="tx_ref" value="yonathan-08072024" />
    <input type="hidden" name="amount" value="100" />
    <input type="hidden" name="currency" value="ETB" />
    <input type="hidden" name="email" value="yonathanakl@gmail.com" />
    <input type="hidden" name="first_name" value="Israel" />
    <input type="hidden" name="last_name" value="Goytom" />
    <input type="hidden" name="title" value="Let us do this" />
    <input type="hidden" name="description" value="Paying with Confidence with cha" />
    <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
    <input type="hidden" name="callback_url" value="https://example.com/callbackurl" />
    <input type="hidden" name="return_url" value="https://example.com/returnurl" />
    <input type="hidden" name="meta[title]" value="test" />
    <button type="submit">Pay Now</button>
</form>
</div>)
    });


     

  };

  return (
    <>
      <h1 className="heading">Order Food</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout}/>
      <div className="cards__container">
        {foods.map((food) => {
          return (
            <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
      </div>
    </>
  );
}

export default App;
