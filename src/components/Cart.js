import React, {Component} from 'react';
import CartDetailRow from "./CartDetailRow"; // ATTENTION bien mettre le  "./"



class Cart extends Component{

  constructor(props){
    super(props);
    this.state = {      
          
      order:[{productName:'buis', amount:1, unitPrice:15},{productName:'if', amount:10, unitPrice:20}]
        
      
    }; 
    this.handleIncreaseAmount= this.handleIncreaseAmount.bind(this);    
  }

    handleIncreaseAmount(itemName){
      console.log('Cart a capté increaseAmount from CartDetailRow');
      // ATTENTION decommenter cree boucle sans fin
      this.setState({   order:[...this.state.order,{productName:itemName, amount:1, unitPrice:15}]    }  );  
       
    }

    handleDecreaseAmount=()=>{
      console.log('Cart a capté DecreaseAmount from CartDetailRow');
      
    }


    render(){
      
      const rows = [];
      this.state.order.forEach(
        (item)=>{
          //alert(item.productName);
          rows.push(<CartDetailRow productName={item.productName}  amount={item.amount} unitPrice={item.unitPrice} onIncreaseAmount={this.handleIncreaseAmount} onDecreaseAmount={this.handleDecreaseAmount}></CartDetailRow>);
        }
      );
        
      console.log(rows); 

      return(
          <div>         
            Contenu du Cart:
            {/*{this.state.order.forEach(item=>console.log(item))}  */}
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table> 

            {/*
            <CartDetailRow productName='if' amount='0'></CartDetailRow>
            <CartDetailRow productName='Buis' amount='1'></CartDetailRow> */}   
          </div> 
      );
    }



}

export default Cart;