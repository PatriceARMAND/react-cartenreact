import React from "react";
import "./style.css";
import CartIcon from "./components/CartIcon";
import Cart from "./components/Cart";
//import CartDetailRow from "./components/CartDetailRow";
import CartIcon from "./CartIcon";

export default function App() {

  const  handleBtnAddArticleClick =()=>{
    var texte = document.getElementById("inputArticle").value;
    console.log(texte);
  }


  
  return (
    <div>   
         
      <CartIcon/>
      <input type="text" id="inputArticle"></input>
      <button id="BtnAddArticle" onClick={handleBtnAddArticleClick} style={{width:50 ,height:20}}>Add</button> {/* do not forget ! comma between attribute in style definition */}
      {/* et pas {this.handleBtnAddArticleClick} only valid for class component */}
      <Cart/>
      
    </div>
  );
}
