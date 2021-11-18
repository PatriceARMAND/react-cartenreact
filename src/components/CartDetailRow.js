import React, {Component} from 'react';


class CartDetailRow extends Component{

    constructor(props){
        super(props);
        this.handleIncreaseAmount = this.handleIncreaseAmount.bind(this);
        this.handleDecreaseAmount = this.handleDecreaseAmount.bind(this);
    } 


    handleIncreaseAmount(itemName){
       console.log({itemName});
       this.props.onIncreaseAmount(itemName); //ATTENTION DO NOT FORGET constructor binding AND "();"
    }


    handleDecreaseAmount(){
      console.log('removed');
      this.props.onDecreaseAmount();
    }


    render(){
    
      return(
      <div> 
        produit: {this.props.productName} {/*DO NOT FORGET this.props AND NOT just props*/}
        quantité:  {this.props.amount}
        <button onClick={this.handleIncreaseAmount('charme')}>+</button>
        <button onClick={this.handleDecreaseAmount}>-</button>
        prix unitaire: {this.props.unitPrice}
        subtotal: {this.props.unitPrice * this.props.amount }
      </div>
      );
    }



}

export default CartDetailRow;