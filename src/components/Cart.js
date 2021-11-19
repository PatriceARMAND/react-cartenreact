import React, {Component} from 'react';
import CartDetailRow from "./CartDetailRow"; // ATTENTION bien mettre le  "./"



class Cart extends Component{

  constructor(props){
    super(props);
    this.state = {      
          
      orderDetailRows:[{id:1, itemLabel:'buis', amount:1, unitPrice:15},{id:2, itemLabel:'if', amount:10, unitPrice:20}]
        
      
    }; 
    this.handleIncreaseAmount= this.handleIncreaseAmount.bind(this);    
  }

    handleIncreaseAmount(itemId){
      console.log(itemId);
      console.log('Cart a capté increaseAmount from CartDetailRow');
      // ATTENTION decommenter cree boucle sans fin
      //this.setState({   order:[...this.state.order,{productName:itemName, amount:1, unitPrice:15}]    }  );  
      // reference artcile about cloning arrey: https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
      
      const newOrderDetaiRows = this.state.orderDetailRows.map((x)=>x);
      const index = newOrderDetaiRows.findIndex(e=>e.id==itemId);
      console.log(index);
      const newAmount = newOrderDetaiRows[index].amount + 1;
      console.log(newAmount);
      newOrderDetaiRows[index].amount = newAmount;
      this.setState({orderDetailRows : newOrderDetaiRows});
       
    }

    handleDecreaseAmount=()=>{
      console.log('Cart a capté DecreaseAmount from CartDetailRow');
      
    }


    render(){
      
      const rows = [];
      this.state.orderDetailRows.forEach(
        (item)=>{
          //alert(item.productName);
          rows.push(<CartDetailRow id={item.id} itemLabel={item.itemLabel}  amount={item.amount} unitPrice={item.unitPrice} onIncreaseAmount={this.handleIncreaseAmount} onDecreaseAmount={this.handleDecreaseAmount}></CartDetailRow>);
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